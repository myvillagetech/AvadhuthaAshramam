import { ApiProperty, PartialType } from '@nestjs/swagger';
import { isNotEmpty } from 'class-validator';
import { CreateRoomTypeDto } from './create-room-type.dto';

export class UpdateRoomTypeDto extends PartialType(CreateRoomTypeDto) {
    
    @ApiProperty({
        type : String
    })
    readonly name: string;

    @ApiProperty({
        type : String
    })
    readonly description: string;

    @ApiProperty({
        type : Number
    })
    readonly price: number;
}
