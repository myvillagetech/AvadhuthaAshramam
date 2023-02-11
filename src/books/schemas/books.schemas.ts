import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
@Schema({
    timestamps: true,
})
export class BookSchemaCreator {
    @Prop(
        {
            required : true,
            unique : true,
            type : String
        }
    )
    title: string;

    @Prop( {
        required : false,
        type : String
    })
    description: string;

    @Prop( {
        required : false,
        type : String
    })
    image: string;

    @Prop( {
        required : false,
        type : String
    })
    price: string;

    @Prop( {
        required : false,
        type : String
    })
    author: string;
}

export type BookDocument = BookSchemaCreator & Document;
export const BookSchema = SchemaFactory.createForClass(BookSchemaCreator);