import { ApiProperty } from '@nestjs/swagger';
import {
    IsNotEmpty,
    IsNumber,
    IsString,
    Min,
} from 'class-validator';

export class PhotoDto{
    @IsString()
    @ApiProperty({
        type: String
    })
    url: string;
}


export class AddBookDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    readonly name: string;

    @IsNumber()
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

    @IsString()
    @ApiProperty({
        type: String
    })
    readonly description: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    readonly author: string;
}

