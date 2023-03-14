import { ApiProperty } from '@nestjs/swagger';
import {
    IsNotEmpty,
    IsNumber,
    IsString,
    MaxLength,
    Min,
} from 'class-validator';
import { IRoles, Roles } from 'src/shared/enums/roles.enum';

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
    readonly photos: string[];

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
