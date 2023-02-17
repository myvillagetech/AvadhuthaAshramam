import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { IAddons } from '../../bikhsha-details/interfaces/bikhsha.interface';
import { CreateBikhshaDto } from './create-bikhsha.dto';

export class UpdateBikhshaDto extends PartialType(CreateBikhshaDto) {
    @IsString()
    @ApiProperty({
        type: String
    })
    readonly basePrice: string;

    @IsString()
    @ApiProperty({
        type: String
    })
    readonly defaultCount: string;

    @IsString()
    @ApiProperty({
        type: String
    })
    readonly incrementalValue: string;

    @IsString()
    @ApiProperty({
        type: String
    })
    readonly numberOfPeople: string;

    @IsString()
    @ApiProperty({
        type: String
    })
    readonly totalPrice: string;

    @ApiProperty({
        type: Array<IAddons>
    })
    readonly selectedAddons : IAddons[];
    
    @ApiProperty({
        type: String
    })
    readonly date: string;


}
