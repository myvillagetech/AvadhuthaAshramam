import { ApiProperty } from '@nestjs/swagger';
import {
    IsIn,
    IsNotEmpty,
    IsString,
    MaxLength,
} from 'class-validator';
import { IRoles, Roles } from 'src/shared/constants/roles.constants';



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
    @IsIn(Object.keys(Roles))
    @ApiProperty({
        type : Array<string>
    })
    readonly roles: IRoles[];

    @ApiProperty({
        type: Object
    })
    readonly userAttributes : Object

}



