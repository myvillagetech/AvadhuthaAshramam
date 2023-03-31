import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { UserSchemaCreator } from "src/user/schemas/user.schemas";

@Schema({
    timestamps: true,
})
export class PaymentInformation {
    @Prop({
        required: true,
        type: String
    })
    txnId: string;
    
    @Prop({
        required: true,
        type: String
    })
    userId: string;

    @Prop({
        required: false,
        type: String
    })
    status: string;
}

@Schema({
    timestamps: true,
})
export class BikhshaServingCreator {
    @Prop({
        required: true,
        type: Number
    })
    quantity : number;

    @Prop({
        required: true,
        type: Boolean
    })
    withSweet: boolean;

    @Prop({
        required: true,
        type: Number
    })
    price: number;

    @Prop({
        required: true,
        type: Date
    })
    serveDate: Date;

    @Prop({
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'user'
    })
    userId: UserSchemaCreator;

    @Prop({
        required: true,
        type: PaymentInformation
    })
    paymentDetails: PaymentInformation;
}



export const paymentInformationSchema = SchemaFactory.createForClass(PaymentInformation);

export type BikhshaServingDocument = BikhshaServingCreator & Document
export const BikhshaServingCreatorSchema = SchemaFactory.createForClass(BikhshaServingCreator);
