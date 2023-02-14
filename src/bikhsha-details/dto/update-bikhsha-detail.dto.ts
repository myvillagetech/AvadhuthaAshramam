import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { IAddons } from '../interfaces/bikhsha.interface';
import { CreateBikhshaDetailDto } from './create-bikhsha-detail.dto';

export class UpdateBikhshaDetailDto extends PartialType(CreateBikhshaDetailDto) {
    @IsString()
    @ApiProperty({
        type: String
    })
    readonly basePrice: string;

    @IsString()
    @ApiProperty({
        type: String
    })
    readonly description: string;

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

    @ApiProperty({
        type: Array<IAddons>
    })
    readonly   addons : IAddons[];

}
