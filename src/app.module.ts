import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticlesModule } from './modules/articles/articles.module';

@Module({
  imports: [AuthModule,
    ArticlesModule,

    MongooseModule.forRoot('mongodb://localhost/NEST-Project') // ~ The forRoot() method accepts the same configuration object as mongoose.connect() from the Mongoose package, as described here.

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
