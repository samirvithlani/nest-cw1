import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Product } from 'src/schemas/product.schema';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {

  constructor(@InjectModel(Product.name) private productModel:Model<Product>){}

  async create(createProductDto: CreateProductDto):Promise<any> {
    //{}
    
    const createdProduct = await this.productModel.create(createProductDto);
    return createdProduct;
  }

  async findAll():Promise<any> {
    
    return await this.productModel.find();
  }

  async findOne(id: ObjectId):Promise<any> {
    return await this.productModel.findById(id);
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  async remove(id: ObjectId) {
    return await this.productModel.findByIdAndDelete(id);
  }
}
