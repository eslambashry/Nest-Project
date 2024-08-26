import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { signUpDto } from '../DTO/dto.auth';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/core/schema/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class SignupService {

    constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async signUp(body: signUpDto){

      
      const email = body.email

        const isEmailExist = await this.userModel.findOne({email: email})

        if(isEmailExist)   throw new HttpException('Email Is Already Exist', HttpStatus.CONFLICT);
        
        body.password = await bcrypt.hash(body.password, 8);

        const newUser = await this.userModel.insertMany(body)
        
        // ~ console.log(body);
        
        return  {message:"Account Created 👤✔️",newUser}
    }
}
