import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { IAddons } from '../interfaces/bikhsha.interface';
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
