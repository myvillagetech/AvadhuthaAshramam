import { Schema } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { IsIn, IsNotEmpty, IsOptional } from "class-validator";
import { IROOM_TYPES, ROOM_TYPES } from "src/shared/constants/room-type.constant";


export class CreateRoomDto {
    @IsNotEmpty()
    @ApiProperty({
        type : String
    })
    readonly roomType: string;

    @IsOptional()
    @ApiProperty({
        type : String
    })
    readonly roomNumber: string;

    @IsNotEmpty()
    @ApiProperty({
        type: Number
    })
    readonly price: Number;

    @IsNotEmpty()
    @ApiProperty({
        type: Boolean
    })
    readonly airConditioner: boolean;

    @IsNotEmpty()
    @ApiProperty({
        type: Number
    })
    readonly airConditionPrice: number;

    @IsNotEmpty()
    @ApiProperty({
        type: Number
    })
    readonly capacity: number;

    @IsNotEmpty()
    @ApiProperty({
        type: Array<String>
    })
    readonly photos: string[];

    // @ApiProperty({
    //     type: Array<{key : String , value : String}>
    // })
    // readonly roomAttributes : {key : String , value : String}[]
}
