import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Date } from "mongoose";
import { IAddons } from "../../bikhsha-details/interfaces/bikhsha.interface";


export interface IUserDetails {
    name :string,
    phone : string,
    email : string
}
export class CreateBikhshaDto {
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        type: Number
    })
    readonly basePrice: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        type: Number
    })
    readonly sweetPrice: number;

}
