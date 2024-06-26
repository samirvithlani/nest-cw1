import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class User{


    @Prop()
    name: string;

    @Prop({unique: [true,'Email already exists']})
    email: string;
    
    @Prop()
    password: string;

}

export const UserSchema = SchemaFactory.createForClass(User);