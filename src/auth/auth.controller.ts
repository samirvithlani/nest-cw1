
import { AuthService } from './auth.service';
import { Controller, Get, Post, Req,Body } from '@nestjs/common';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {

    constructor(private authService:AuthService){}

    @Post('/signup')
    signup(@Body()signupDto :SignupDto){

        return this.authService.signUp(signupDto);
    }

    @Post('/login')
    login(@Body()loginDto:LoginDto){
        return this.authService.login(loginDto);
    }

}
