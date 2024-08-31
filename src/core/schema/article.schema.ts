import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { User } from "./user.schema";
import { Tags } from "./tags.schema";


@Schema()
export class Article{

    @Prop({required:true})
    title:string;

    @Prop({required:true})
    slug:string;

    @Prop()
    descreption:string;

    @Prop({required:true})
    content:string;

    @Prop({required:true})
    coverImage:string;

    @Prop()
    images:string;

    @Prop()
    likes:number;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' ,required:true})
    auther: User;

    @Prop({type: mongoose.Schema.Types.ObjectId ,ref: 'Tags', required:true })
    tagsList:[Tags]



}


export const articleSchema = SchemaFactory.createForClass(Article);
