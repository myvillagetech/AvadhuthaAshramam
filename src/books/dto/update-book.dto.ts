import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, Min } from 'class-validator';
import { AddBookDto } from './add-book.dto';

export class PhotoDto{
    
    @ApiProperty({
        type: String
    })
    url: string;
}
export class UpdateBookDto extends PartialType(AddBookDto) {
    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    readonly name: string;

    @IsNotEmpty()
    @ApiProperty({
        type: Number
    })
    @Min(0)
    readonly price: number;

    @ApiProperty({
        type: Array<String>
    })
     photos:string[];

    @ApiProperty({
        type: String
    })
    readonly description: string;

    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    readonly author: string;
}
