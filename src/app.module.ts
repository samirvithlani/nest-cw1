import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [MongooseModule.forRoot("mongodb://127.0.0.1:27017/nestjscw1"),ProductsModule, CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
