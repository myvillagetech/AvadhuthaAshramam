import { ApiProperty } from '@nestjs/swagger';
import {
    IsNotEmpty,
    IsString,
    MaxLength,
} from 'class-validator';
import { IRoles, Roles } from 'src/shared/constants/roles.constants';

export class CreateBookDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    readonly title: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    readonly description: string;

    @ApiProperty({
        type: Array<String>
    })
    readonly images: string[];

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    readonly price: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    readonly author: string;
}
