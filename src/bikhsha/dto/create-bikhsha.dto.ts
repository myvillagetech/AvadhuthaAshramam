import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { IAddons } from "../../bikhsha-details/interfaces/bikhsha.interface";

export class CreateBikhshaDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    readonly basePrice: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    readonly description: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    readonly defaultCount: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    readonly incrementalValue: string;

    @ApiProperty({
        type: Array<IAddons>
    })
    readonly   addons : IAddons[];

}
