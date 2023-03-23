import { Module } from '@nestjs/common';
import { BooksOrderService } from './books-order.service';
import { BooksOrderController } from './books-order.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MODEL_ENUMS } from 'src/shared/enums/model.enum';
import { BooksOrderSchema } from './schemas/books-order.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
        { name: MODEL_ENUMS.BOOKS_ORDER, schema: BooksOrderSchema },
    ]),
  ],
  controllers: [BooksOrderController],
  providers: [BooksOrderService]
})
export class BooksOrderModule {}
