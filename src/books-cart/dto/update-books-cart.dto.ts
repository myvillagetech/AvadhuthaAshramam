import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { AddBooksCartDto } from './add-books-cart.dto';

export class UpdateBooksCartDto {

    @IsNotEmpty()
    @ApiProperty({
        type: Number
    })
    readonly quantity: number;
}
