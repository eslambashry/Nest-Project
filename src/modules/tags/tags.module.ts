import { Module } from '@nestjs/common';
import { AddController } from './add/add.controller';
import { TagService } from './add/tag.service';
import { MongooseModule } from '@nestjs/mongoose';
import { tagesSchema, Tags } from 'src/core/schema/tags.schema';

@Module({
  imports:[MongooseModule.forFeature([{ name: Tags.name, schema: tagesSchema }])], // User.name = class User{}
  controllers: [AddController],
  providers:[TagService]
})
export class TagsModule {


}
