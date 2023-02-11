import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsIn, IsNotEmpty } from 'class-validator';
import { IROOM_TYPES, ROOM_TYPES } from 'src/shared/constants/room-type.constant';
import { CreateRoomDto } from './create-room.dto';

export class UpdateRoomDto extends PartialType(CreateRoomDto) {
    @IsNotEmpty()
    @IsIn(Object.keys(ROOM_TYPES))
    @ApiProperty({
        type : Array<string>
    })
    readonly roles: IROOM_TYPES[];

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
