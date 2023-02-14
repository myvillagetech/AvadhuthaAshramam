import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema({
    timestamps: true,
})
export class RoomSchemaCreator {
    @Prop({
        required : true,
        type : String
    })
    roomType: string;

    @Prop({
        required : true,
        type : String
    })
    price: string;

    @Prop( {
        required : true,
        type : Boolean,
        default : false
    })
    airConditioner: boolean

    @Prop( {
        required : true,
        type : String
    })
    capacity: string;

    @Prop( {
        required : true,
        type : Array<String>
    })
    photos: string[];

    @Prop({
        type : Boolean,
        default : false
    })
    isFilled: boolean;

    @Prop({
        type: mongoose.Types.Map,
    })
    roomAttributes: Object;
}

export type RoomDocument = RoomSchemaCreator & Document;
export const RoomSchema = SchemaFactory.createForClass(RoomSchemaCreator);
