import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { CategoryModule } from './category/category.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { MulterModule } from '@nestjs/platform-express/multer';


@Module({
  imports: [ConfigModule.forRoot(), MongooseModule.forRoot("mongodb://127.0.0.1:27017/nestjscw1"), MulterModule.register({ dest: "./uploads" }), ProductsModule, CategoryModule, AuthModule,],
  controllers: [AppController],
  providers: [AppService, JwtService],
})
export class AppModule { }
