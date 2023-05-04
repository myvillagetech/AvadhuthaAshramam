import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { UserSchemaCreator } from "src/user/schemas/user.schemas";

@Schema({
    timestamps : true,
})

export class AddressManagerSchemaCreator {
    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'bookCartId'
    })
    userId  : UserSchemaCreator;

    @Prop({
        type : String,
        required : true
    })
    name : string;

    @Prop({
        type : String,
        required : true
    })
    addressLineOne : string;

    @Prop({
        type : String
    })
    addressLineTwo : string;

    @Prop({
        type : String,
        required : true
    })
    city : string;

    @Prop({
        type : String,
        required : true
    })
    state : string;

    @Prop({
        type : Number,
        required : true
    })
    pinCode : number

    @Prop({
        type : String,
    })
    email : string;

    @Prop({
        type : Number,
        required : true,
    })
    phoneNumber : number

}

export type AddressManagerDocument = AddressManagerSchemaCreator & Document
export const AddressManagerSchema = SchemaFactory.createForClass(AddressManagerSchemaCreator)