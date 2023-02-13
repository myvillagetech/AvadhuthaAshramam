import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { CreateBookDto } from './create-book.dto';

export class UpdateBookDto extends PartialType(CreateBookDto) {
    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    readonly title: string;

    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    readonly description: string;

    @IsNotEmpty()
    @ApiProperty({
        type: Array<String>
    })
    readonly images: string[];

    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    readonly price: string;

    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    readonly author: string;
}
