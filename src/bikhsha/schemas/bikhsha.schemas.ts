import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Date } from 'mongoose';



@Schema({
    timestamps: true,
})
export class BikhshaSchemaCreator {
    @Prop({
        required: true,
        type: Number
    })
    basePrice: number;

    @Prop({
        required: true,
        type: Number
    })
    sweetPrice: number;

    @Prop({
        required: true,
        type: Number,
    })
    servesFor: number;

    @Prop({
        type: String,
    })
    discription: string;
}

export type BikhshaDocument = BikhshaSchemaCreator & Document;
export const BikhshaSchema = SchemaFactory.createForClass(BikhshaSchemaCreator);