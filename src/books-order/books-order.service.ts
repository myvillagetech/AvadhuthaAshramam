import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MODEL_ENUMS } from 'src/shared/enums/model.enum';
import { CreateBooksOrderDto } from './dto/create-books-order.dto';
import { UpdateBooksOrderDto } from './dto/update-books-order.dto';
import { BooksOrderDocument } from './schemas/books-order.schemas';

@Injectable()
export class BooksOrderService {
  @InjectModel(MODEL_ENUMS.BOOKS_ORDER) private bookCartItemModel: Model<BooksOrderDocument>;
  
  async createBooksOrder(createBooksOrderDto: CreateBooksOrderDto) {
    const newBooksOrder = await new this.bookCartItemModel(createBooksOrderDto);
    return newBooksOrder.save();
  }
 
}
