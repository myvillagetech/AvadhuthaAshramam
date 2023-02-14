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

    @Prop( {
        required : true,
        type : String
    })
    description: string;

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
        required : false,
        type : Array<IAddons>
    })
    addons : IAddons[]
}

export type BikhshaDocument = BikhshaSchemaCreator & Document;
export const BikhshaSchema = SchemaFactory.createForClass(BikhshaSchemaCreator);