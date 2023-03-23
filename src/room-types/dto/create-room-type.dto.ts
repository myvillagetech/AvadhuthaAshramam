import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateRoomTypeDto {

    @IsNotEmpty()
    @ApiProperty({
        type : String
    })
    readonly name: string;

    @IsOptional()
    @ApiProperty({
        type : String
    })
    readonly description: string;

    @IsNotEmpty()
    @ApiProperty({
        type : Number
    })
    readonly price: number;

}
