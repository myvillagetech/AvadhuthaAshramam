import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGO_KEYS } from './config/keys.config';
import { ConfigModule } from '@nestjs/config';
import { RoomModule } from './room/room.module';
import { BooksModule } from './books/books.module';

@Module({
  imports: [
    MongooseModule.forRoot(MONGO_KEYS.url),
    UserModule, 
    AuthModule, 
    RoomModule,
    BooksModule,
    ConfigModule.forRoot(), RoomModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
