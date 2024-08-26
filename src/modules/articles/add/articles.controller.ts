import { Body, Controller, Get, Post } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { Article } from 'src/core/schema/article.schema';

@Controller('articles')
export class ArticlesController {


    constructor(private _articlesService:ArticlesService){}


    @Post()
    getArticls(@Body() body:Article){
        return this._articlesService.addArticle(body)
    }
}
