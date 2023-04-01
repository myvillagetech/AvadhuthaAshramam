import { ApiProperty } from '@nestjs/swagger';
import {
    IsNotEmpty,
    IsNumber,
    IsString,
    MaxLength,
    Min,
} from 'class-validator';
import { IRoles, Roles } from 'src/shared/enums/roles.enum';

export class AddBooksCartDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    readonly bookId: string;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        type: Number
    })
    @Min(0)
    readonly price: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        type: Number
    })
    @Min(0)
    readonly quantity: number;
}