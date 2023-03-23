import { Module } from '@nestjs/common';
import { BooksCartService } from './books-cart.service';
import { BooksCartController,  } from './books-cart.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MODEL_ENUMS } from 'src/shared/enums/model.enum';
import { BookCartItemSchema } from './schemas/books-cart.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
        { name: MODEL_ENUMS.BOOKS_CART, schema: BookCartItemSchema },
    ]),
  ],
  controllers: [BooksCartController],
  providers: [BooksCartService]
})
export class BooksCartModule {}
