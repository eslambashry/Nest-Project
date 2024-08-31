import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Article } from "./article.schema";

@Schema()
    export class Tags{
        @Prop()
        keyWord:string

        @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' ,required:true})
        belongsTo: Article;
        
    }
    export const tagesSchema = SchemaFactory.createForClass(Tags);
