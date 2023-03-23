import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { IAddons } from '../../bikhsha-details/interfaces/bikhsha.interface';
import { CreateBikhshaDto } from './create-bikhsha.dto';

export class UpdateBikhshaDto extends PartialType(CreateBikhshaDto) {
    @IsNumber()
    @ApiProperty({
        type: Number
    })
    readonly basePrice: number;

    @IsNumber()
    @ApiProperty({
        type: Number
    })
    readonly sweetPrice: number;




}
