import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { AddBooksCartDto } from './add-books-cart.dto';

export class UpdateBooksCartDto extends PartialType(AddBooksCartDto) {
    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    readonly bookId: string;

    @IsNotEmpty()
    @ApiProperty({
        type: Number
    })
    readonly price: number;

    @IsNotEmpty()
    @ApiProperty({
        type: Number
    })
    readonly quantity: number;

    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    readonly userId: string;
}
