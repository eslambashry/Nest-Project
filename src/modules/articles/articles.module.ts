import { Module } from '@nestjs/common';
import { ArticlesController } from './add/articles.controller';
import { ArticlesService } from './add/articles.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Article, articleSchema } from 'src/core/schema/article.schema';

@Module({
  imports:[MongooseModule.forFeature([{ name: Article.name, schema: articleSchema }])], // User.name = class User{}
  controllers: [ArticlesController],
  providers: [ArticlesService],
})
export class ArticlesModule {}
