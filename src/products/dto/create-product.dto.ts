import { ApiProperty } from "@nestjs/swagger/dist/decorators/api-property.decorator";

export class CreateProductDto {


    @ApiProperty({
        description: 'The name of the product',
        type: String,
        example: 'Product 1'

    })
    readonly name: string;
    @ApiProperty({
        description: 'The description of the product',
        type: String,
    })
    readonly description: string;
    @ApiProperty({
        description: 'The price of the product',
        type: Number,
    })
    readonly price: number;
    @ApiProperty({
        description: 'The quantity of the product',
        type: Number,
    })
    readonly qty: number;
}
