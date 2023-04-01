import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { BookSchemaCreator } from 'src/books/schemas/books.schemas';
import { UserSchemaCreator } from 'src/user/schemas/user.schemas';


@Schema({
    timestamps: true,
})
export class BookCartSchemaCreator {
    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'bookId'
    })
    bookId : BookSchemaCreator;

    @Prop({
        required: true,
        type: Number
    })
    price: number;

    @Prop({
        required: true,
        type: Number
    })
    quantity : number;

    @Prop({
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'user'
    })
    userId: UserSchemaCreator;
}

export type BookCartDocument = BookCartSchemaCreator & Document;
export const BookCartSchema = SchemaFactory.createForClass(BookCartSchemaCreator);
