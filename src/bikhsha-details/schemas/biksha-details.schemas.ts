import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { IAddons } from 'src/bikhsha-details/interfaces/bikhsha.interface';



@Schema({
    timestamps: true,
})
export class BikhshaDetailsSchemaCreator {
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

export type BikhshaDetailsDocument = BikhshaDetailsSchemaCreator & Document;
export const BikhshaDetailsSchema = SchemaFactory.createForClass(BikhshaDetailsSchemaCreator);