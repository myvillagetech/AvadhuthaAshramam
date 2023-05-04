import { ApiProperty, ApiTags } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateAddressManagerDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type : String
    })
    name : string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type : String
    })
    addressLineOne : string

    @ApiProperty({
        type : String
    })
    addressLineTwo : string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type : String
    })
    city : string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type : String
    })
    state : string

    @ApiProperty({
        type : String
    })
    email : string

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        type : Number
    })
    pinCode : number

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        type : Number
    })
    phoneNumber : number
}
