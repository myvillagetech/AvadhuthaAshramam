import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema({
    timestamps: true,
})
export class Author {
    @Prop({
        required: true,
        type: String
    })
    name: string;

    @Prop({
        required: false,
        type: String
    })
    description: string;
}
export const AuthorSchema = SchemaFactory.createForClass(Author);

@Schema({
    timestamps: true,
})
export class Photo {
    @Prop({
        required: true,
        type: String
    })
    url: string;
}
export const PhotoSchema = SchemaFactory.createForClass(Photo);

@Schema({
    timestamps: true,
})
export class BookSchemaCreator {
    @Prop({
        required: true,
        type: String
    })
    name: string;

    @Prop({
        required: true,
        type: Number
    })
    price: number;

    @Prop({
        required: false,
        type: String
    })
    description: string;

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'photos'
    })
    photos: Photo;

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'photos'
    })
    author: Author;

}

export type BookDocument = BookSchemaCreator & Document;
export const BookSchema = SchemaFactory.createForClass(BookSchemaCreator);


