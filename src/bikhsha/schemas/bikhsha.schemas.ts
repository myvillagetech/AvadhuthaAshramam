import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Date } from 'mongoose';
import { IAddons } from '../../bikhsha-details/interfaces/bikhsha.interface';



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
}

export type BikhshaDocument = BikhshaSchemaCreator & Document;
export const BikhshaSchema = SchemaFactory.createForClass(BikhshaSchemaCreator);