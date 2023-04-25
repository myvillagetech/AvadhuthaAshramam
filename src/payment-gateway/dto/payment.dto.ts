import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber, IsObject, IsString, MaxLength, MinLength } from "class-validator";

class coustomerDetails{
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    customer_phone: string;

    @IsString()
    @ApiProperty({
        type: String
    })
    customer_email: string;

    @IsString()
    @ApiProperty({
        type: String
    })
    customer_name: string;
}

class linkNotifyObject{
    @IsBoolean()
    @ApiProperty({
        type : Boolean,
        default : false
    })
    send_sms : boolean

    @IsBoolean()
    @ApiProperty({
        type : Boolean,
        default : false
    })
    send_email : boolean
}

export class PaymentDto{

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        type: Number
    })
    link_amount: number;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    @MinLength(3)
    @MaxLength(3)
    link_currency: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        type: String
    })
    @MaxLength(500)
    link_purpose: string;

    @IsObject()
    @IsNotEmpty()
    @ApiProperty({
        type : Object,
        properties : {
            customer_phone : {type : 'string'},
            customer_email : {type : 'string'},
            customer_name : {type : 'string'},
        }
    })
    customer_details : coustomerDetails

    @IsObject()
    @IsNotEmpty()
    @ApiProperty({
        type : Object,
        properties : {
            send_sms : {type : 'boolean', default : false},
            send_email : {type : 'boolean', default : false},
        }
    })
    link_notify : linkNotifyObject

}


export class mobilePaymentDto{
    
    @IsNumber()
    @ApiProperty({
        type : Number
    })
    order_amount : Number

    @IsObject()
    @IsNotEmpty()
    @ApiProperty({
        type : Object,
        properties : {
            customer_phone : {type : 'string'},
            customer_email : {type : 'string'},
            customer_name : {type : 'string'},
            customer_id:  {type : 'string'}
        }
    })
    customer_details : coustomerDetails

    @ApiProperty({
        type : Object,
        properties : {
        }
    })
    order_meta : object

    @ApiProperty({
        type : String
    })
    order_note : string


}

