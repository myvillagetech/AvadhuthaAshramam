import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { BookCartItem } from 'src/books-cart/schemas/books-cart.schemas';
import { BookSchemaCreator } from 'src/books/schemas/books.schemas';

@Schema({
    timestamps: true,
})
export class ShippingAddress {
  
    @Prop({
        type: String,
    })
    readonly line1: string;

    @Prop({
        type: String,
    })
    readonly line2: string;

    @Prop({
        type: String,
    })
    readonly street: string;

    @Prop({
        type: String,
    })
    readonly city: string;

    @Prop({
        type: String,
    })
    readonly state: string;

    @Prop({
        type: String,
    })
    readonly country: string;

    @Prop({
        type: String,
    })
    readonly landmark: string;
}


@Schema({
    timestamps: true,
})
export class PaymentDetails {
  
    @Prop({
        type: String,
    })
    readonly txnId: string;
    @Prop({
        type: String,
    })
    readonly status: string;
}

@Schema({
    timestamps: true,
})

export class BooksOrder {
    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'bookCartId'
    })
    bookCartId  : BookCartItem;

    @Prop({
        required: true,
        type: PaymentDetails,
       
    })
    paymentInformation : PaymentDetails;

    @Prop({
        type: String
    })
    status  : string;

        @Prop({
            type: mongoose.Schema.Types.ObjectId,
            ref: 'shippingAddress'
        })
        shippingAddress : ShippingAddress ;

        @Prop({
            type: mongoose.Schema.Types.ObjectId,
            ref: 'userId '
        })
        userId  : BookCartItem;  
}

export const ShippingAddressSchema = SchemaFactory.createForClass(ShippingAddress);
export const PaymentDetailsSchema = SchemaFactory.createForClass(PaymentDetails);

export type BooksOrderDocument = BooksOrder & Document;
export const BooksOrderSchema = SchemaFactory.createForClass(BooksOrder);