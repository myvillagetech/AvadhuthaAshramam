import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, isBoolean, IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class PaymentInformation{
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    readonly txnId: string;
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    readonly userId: string;
    
    @IsOptional()
    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    readonly status: string;
}

export class CreateBikhshaServingDto {
    
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        type: Number
    })
    readonly quantity: number;

    @IsBoolean()
    @IsNotEmpty()
    @ApiProperty({
        type: Boolean
    })
    readonly withSweet: boolean;

    // @IsDate()
    @IsNotEmpty()
    @ApiProperty({
        type: Date
    })
    readonly serveDate:Date;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        type: Number
    })
    readonly price: number;

    @IsNotEmpty()
    @ApiProperty({
        type: PaymentInformation,
    })
    readonly paymentDetails: PaymentInformation;
}
