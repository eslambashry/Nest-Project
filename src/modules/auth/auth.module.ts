import { Module } from '@nestjs/common';
import { SignupService } from './signup/signup.service';
import { SigninService } from './signin/signin.service';
import { SignupController } from './signup/signup.controller';
import { SigninController } from './signin/signin.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/core/schema/user.schema';
import { JwtService } from '@nestjs/jwt';


@Module({
  imports:[MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])], // User.name = class User{}
  controllers: [SignupController,SigninController],
  providers: [SignupService,SigninService,JwtService]
})
export class AuthModule {}
