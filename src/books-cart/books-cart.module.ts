import { Module } from '@nestjs/common';
import { BooksCartService } from './books-cart.service';
import { BooksCartController,  } from './books-cart.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MODEL_ENUMS } from 'src/shared/enums/model.enum';
import { BookCartSchema } from './schemas/books-cart.schemas';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([
        { name: MODEL_ENUMS.BOOKS_CART, schema: BookCartSchema },
    ]),
    AuthModule
  ],
  controllers: [BooksCartController],
  providers: [BooksCartService]
})
export class BooksCartModule {}
