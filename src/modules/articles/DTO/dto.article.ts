import { IsNotEmpty, IsString, MinLength } from "class-validator";
import { User } from "src/core/schema/user.schema";

export class addArticle{


    @MinLength(3)
    @IsString()	
    @IsNotEmpty()
    title:string;

    @MinLength(3)
    @IsString()	
    @IsNotEmpty()
    slug:string;
    
    @MinLength(3)
    @IsString()	
    @IsNotEmpty()
    descreption:string;

    @MinLength(3)
    @IsString()	
    @IsNotEmpty()
    content:string;
    
    @IsString()	
    @IsNotEmpty()
    coverImage:string;

    @IsString()	
    @IsNotEmpty()
    images:string;
    
    
    @IsString()	
    @IsNotEmpty()
    likes:number; 

    @IsString()	
    @IsNotEmpty()
    auther:User;

}