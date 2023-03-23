import { ApiProperty } from '@nestjs/swagger';
import {
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
    MaxLength,
    Min,
} from 'class-validator';
import { AddBooksCartDto } from 'src/books-cart/dto/add-books-cart.dto';
import { IRoles, Roles } from 'src/shared/enums/roles.enum';

export class PaymentInformationDto {
    @IsNotEmpty()
    @ApiProperty({
        type: String,
    })
    readonly txnId: string;

    @IsNotEmpty()
    @ApiProperty({
        type: String,
    })
    readonly status: string;
}

export class CreateBooksOrderDto {
    @IsNotEmpty()
    @ApiProperty({
        type: [AddBooksCartDto],
    })
    readonly description: AddBooksCartDto[];

    @IsNotEmpty()
    @ApiProperty({
        type: String,
    })
    readonly line1: string;

    @IsOptional()
    @ApiProperty({
        type: String,
    })
    readonly line2: string;

    @IsOptional()
    @ApiProperty({
        type: String,
    })
    readonly street: string;

    @IsNotEmpty()
    @ApiProperty({
        type: String,
    })
    readonly city: string;

    @IsNotEmpty()
    @ApiProperty({
        type: String,
    })
    readonly state: string;

    @IsNotEmpty()
    @ApiProperty({
        type: String,
    })
    readonly country: string;

    @IsNotEmpty()
    @ApiProperty({
        type: PaymentInformationDto,
    })
    readonly paymentInformation: PaymentInformationDto;
}







