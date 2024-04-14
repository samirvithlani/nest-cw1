import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema()
export class Product{

    @Prop()
    name: string;

    @Prop()
    price: number;

    @Prop()
    qty: number;

    @Prop()
    description: string;


}

export const productSchema = SchemaFactory.createForClass(Product);
