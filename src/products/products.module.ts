import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, productSchema } from 'src/schemas/product.schema';
import { AuthGuard } from 'src/auth/auth.guard';
import { JwtService } from '@nestjs/jwt';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: productSchema }])
  ], controllers: [ProductsController],
  providers: [ProductsService,JwtService,AuthGuard],
})
export class ProductsModule { }
