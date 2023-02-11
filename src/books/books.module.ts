import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MODEL_ENUMS } from 'src/shared/enums/model.enum';
import { BookSchema } from './schemas/books.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
        { name: MODEL_ENUMS.BOOKS, schema: BookSchema },
    ]),
  ],
  controllers: [BooksController],
  providers: [BooksService]
})
export class BooksModule {}
