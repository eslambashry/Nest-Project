import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class signUpDto{

    @MinLength(3)
    @MaxLength(12)
    @IsString()	
    name:string;

    @MinLength(3)
    @IsString()	
    @IsEmail()
    email:string;

    @MinLength(3)
    @IsString()	
    @IsNotEmpty()
    password:string;
}

export class signInDto{

    @MinLength(3)
    @IsString()	
    @IsEmail()
    email:string;

    @MinLength(3)
    @IsString()	
    @IsNotEmpty()
    password:string;
}