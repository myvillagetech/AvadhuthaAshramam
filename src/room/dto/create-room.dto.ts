import { Schema } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { IsIn, IsNotEmpty } from "class-validator";
import { IROOM_TYPES, ROOM_TYPES } from "src/shared/constants/room-type.constant";


export class CreateRoomDto {
    @IsNotEmpty()
    @ApiProperty({
        type : String
    })
    readonly roomType: string;

    @IsNotEmpty()
    @ApiProperty({
        type : String
    })
    readonly roomNumber: string;

    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    readonly price: string;

    @IsNotEmpty()
    @ApiProperty({
        type: Boolean
    })
    readonly airConditioner: boolean;

    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    readonly capacity: string;

    @IsNotEmpty()
    @ApiProperty({
        type: Array<String>
    })
    readonly photos: string[];

    @ApiProperty({
        type: Array<{key : String , value : String}>
    })
    readonly roomAttributes : {key : String , value : String}[]
}
