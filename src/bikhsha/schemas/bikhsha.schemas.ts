import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { IAddons } from '../../bikhsha-details/interfaces/bikhsha.interface';



@Schema({
    timestamps: true,
})
export class BikhshaSchemaCreator {
    @Prop({
            required : true,
            type : String
    })
    basePrice: string;

    @Prop({
        required : true,
        type : String
    })
    defaultCount : string;

    @Prop({
        required : true,
        type :String
    })
    incrementalValue : string;

    @Prop({
        required : true,
        type :String
    })
    numberOfPeople : string;

    @Prop({
        required : true,
        type :String
    })
    totalPrice : string;

    @Prop({
        required : false,
        type : Array<IAddons>
    })
    selectedAddons : IAddons[]
}

export type BikhshaDocument = BikhshaSchemaCreator & Document;
export const BikhshaSchema = SchemaFactory.createForClass(BikhshaSchemaCreator);