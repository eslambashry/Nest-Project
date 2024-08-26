import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Article } from 'src/core/schema/article.schema';
import { addArticle } from '../DTO/dto.article';

@Injectable()
export class ArticlesService {


    constructor(@InjectModel(Article.name) private articleModel: Model<Article>) {}


  async  addArticle(body:addArticle){


    const newArticle = await this.articleModel.insertMany(body)
    
    return {message:"Article Added 👍",newArticle}

    }
}
