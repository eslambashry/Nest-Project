import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tags } from 'src/core/schema/tags.schema';
import { addTag } from '../DTO/dto.tags';

@Injectable()
export class TagService {



    constructor(@InjectModel(Tags.name) private tagsModel: Model<Tags>) {}


    async  addTage(body:addTag){
  
  
      const newTage = await this.tagsModel.insertMany(body)
      
      return {message:"Article Added 👍",newTage}
  
      }
}
