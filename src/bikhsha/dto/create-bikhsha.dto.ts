import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { IAddons } from "../../bikhsha-details/interfaces/bikhsha.interface";


export interface IUserDetails {
    name :string,
    phone : string,
    email : string
}
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
    readonly defaultCount: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    readonly incrementalValue: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    readonly numberOfPeople: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    readonly totalPrice: string;


    @IsNotEmpty()
    @ApiProperty({
        type: Object
    })
    readonly userDetails: IUserDetails;


    @ApiProperty({
        type: Array<IAddons>
    })
    readonly selectedAddons : IAddons[];

    

}
