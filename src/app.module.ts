import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGO_KEYS } from './config/keys.config';
import { BooksModule } from './books/books.module';

@Module({
  imports: [
    MongooseModule.forRoot(MONGO_KEYS.url),
    UserModule, 
    AuthModule, BooksModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
