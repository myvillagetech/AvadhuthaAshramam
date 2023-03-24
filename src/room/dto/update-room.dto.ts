import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsIn, IsNotEmpty } from 'class-validator';
import { IROOM_TYPES, ROOM_TYPES } from 'src/shared/constants/room-type.constant';
import { CreateRoomDto } from './create-room.dto';

export class UpdateRoomDto extends PartialType(CreateRoomDto) {

    @ApiProperty({
        type : String
    })
    readonly roomType: string;

    @ApiProperty({
        type : String
    })
    readonly roomNumber: string;


    @ApiProperty({
        type: Number
    })
    readonly price: number;

    @ApiProperty({
        type: Boolean
    })
    readonly airConditioner: boolean;

    @ApiProperty({
        type: Number
    })
    readonly airConditionPrice: number;

    @ApiProperty({
        type: Number
    })
    readonly capacity: number;

    @ApiProperty({
        type: Array<String>
    })
    readonly photos: string[];

  
}
