import { Body, Controller, Get, Post } from '@nestjs/common';
import { SignupService } from './signup.service';
import { signUpDto } from '../DTO/dto.auth';

@Controller('signup')
export class SignupController {

    constructor(private signupServ:SignupService){}



    @Post()
    signUp(@Body() body: signUpDto){
        return this.signupServ.signUp(body)
}


}
