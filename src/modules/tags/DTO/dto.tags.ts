import { IsString } from "class-validator";

export class addTag{

    @IsString()
    keyWord:string;

    @IsString()
    belongsTo:string
}

