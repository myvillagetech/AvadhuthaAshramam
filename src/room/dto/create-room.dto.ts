import { Schema } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { IsIn, IsNotEmpty } from "class-validator";
import { IROOM_TYPES, ROOM_TYPES } from "src/shared/constants/room-type.constant";


export class CreateRoomDto {
    @IsNotEmpty()
    @IsIn(Object.keys(ROOM_TYPES))
    @ApiProperty({
        type : Array<string>
    })
    readonly roomType: IROOM_TYPES[];

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
        type: Object
    })
    readonly userAttributes : Object
}