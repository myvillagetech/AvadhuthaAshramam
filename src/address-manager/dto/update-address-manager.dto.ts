import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateAddressManagerDto } from './create-address-manager.dto';
import { IsString, IsNotEmpty, IsEmail, IsNumber } from 'class-validator';

export class UpdateAddressManagerDto extends PartialType(CreateAddressManagerDto) {
    @IsString()
    @ApiProperty({
        type : String
    })
    name : string

    @IsString()
    @ApiProperty({
        type : String
    })
    addressLineOne : string

    @IsString()
    @ApiProperty({
        type : String
    })
    addressLineTwo : string

    @IsString()
    @ApiProperty({
        type : String
    })
    city : string

    @IsString()
    @ApiProperty({
        type : String
    })
    state : string

    @ApiProperty({
        type : String
    })
    email : string

    @IsNumber()
    @ApiProperty({
        type : Number
    })
    pinCode : number

    @IsNumber()
    @ApiProperty({
        type : Number
    })
    phoneNumber : number
}
