import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { UserSchema } from 'src/schemas/user.schema';
import { AuthController } from './auth.controller';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

@Module({
  imports: [
    PassportModule.register({defaultStrategy: 'jwt'}),
    JwtModule.registerAsync({
      imports:[ConfigModule],
      inject:[ConfigService],
      useFactory:(config:ConfigService)=>{
        return{
          secret:config.get('JWT_SECRET'),
          signOptions:{
            expiresIn:config.get('JWT_EXPIRE')
          }
        }
      }
    }),
    
    MongooseModule.forFeature([{name:"User",schema:UserSchema}])
  ],
  controllers: [AuthController],
  providers: [AuthGuard,AuthService]
})
export class AuthModule {}
