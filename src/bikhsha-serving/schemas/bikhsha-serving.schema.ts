import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

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
        required: true,
        type: PaymentInformation
    })
    paymentDetails: PaymentInformation;
}



export const paymentInformationSchema = SchemaFactory.createForClass(PaymentInformation);

export type BikhshaServingDocument = BikhshaServingCreator & Document
export const BikhshaServingCreatorSchema = SchemaFactory.createForClass(BikhshaServingCreator);
