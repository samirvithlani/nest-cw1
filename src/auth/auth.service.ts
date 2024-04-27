import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/user.schema';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt/dist';
import { SignupDto } from './dto/signup.dto';

@Injectable()
export class AuthService {

    constructor(
        @InjectModel(User.name) private userModel:Model<User>,
        private jwtService:JwtService
    ){}

    async signUp(signupDto:SignupDto){
        const {name,email,password} = signupDto;
        const hashedPassword = await bcrypt.hash(password,10);


        const user = await this.userModel.create({
            name:name,
            email:email,
            password:hashedPassword
        })

        const token = this.jwtService.sign({id:user.name});

        return {token};
    }
}
