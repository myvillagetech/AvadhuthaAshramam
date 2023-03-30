import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString,  } from "class-validator";

export class CreateBikhshaDto {
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        type: Number
    })
    readonly basePrice: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        type: Number
    })
    readonly sweetPrice: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        type: Number
    })
    readonly servesFor: number;

    @IsString()
    @ApiProperty({
        type: String
    })
    readonly discription: string;


}
