import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { BookSchemaCreator } from 'src/books/schemas/books.schemas';

@Schema({
    timestamps: true,
})
export class BookCartItem {
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
}


@Schema({
    timestamps: true,
})
export class BookCart {
    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'bookCartItems'
    })
    bookCartItems : BookCartItem;
     
}
export const BookCartSchema = SchemaFactory.createForClass(BookCart);

export type BookCartDocument = BookCartItem & Document;
export const BookCartItemSchema = SchemaFactory.createForClass(BookCartItem);