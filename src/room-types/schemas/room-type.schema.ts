import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps: true,
})
export class RoomTypeCreator {
    @Prop({
        required : true,
        type : String
    })
    name : string;

    @Prop({
        required : true,
        type : String
    })
    description  : string;

    @Prop({
        required : true,
        type : Number
    })
    price   : number;
}

export type RoomTypeDocument = RoomTypeCreator & Document;
export const RoomTypeSchema = SchemaFactory.createForClass(RoomTypeCreator);
