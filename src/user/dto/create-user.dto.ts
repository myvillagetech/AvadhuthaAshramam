import { ApiProperty } from '@nestjs/swagger';
import {
    IsIn,
    IsNotEmpty,
    IsString,
    MaxLength,
} from 'class-validator';
import { IRoles, Roles } from 'src/shared/enums/roles.enum';



export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    readonly name: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    readonly email: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type : String
    })
    readonly phone : string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    password: string;

    @IsNotEmpty()
    @ApiProperty({
        type : Array<String>
    })
    readonly roles: string[];

    @ApiProperty({
        type: Object
    })
    readonly userAttributes : Object

}



