import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MODEL_ENUMS } from 'src/shared/enums/model.enum';
import { AddBooksCartDto } from './dto/add-books-cart.dto';
import { UpdateBooksCartDto } from './dto/update-books-cart.dto';
import { BookCartDocument } from './schemas/books-cart.schemas';

@Injectable()
export class BooksCartService {
  @InjectModel(MODEL_ENUMS.BOOKS_CART) private bookCartItemModel: Model<BookCartDocument>;
  
  async createCart(createBooksCartDto: AddBooksCartDto) {
    const newCartBook = await new this.bookCartItemModel(createBooksCartDto);
    return newCartBook.save();
  }
  
  async updateCart(bookDetails: UpdateBooksCartDto, bookId: string) {
    const book = await this.bookCartItemModel.findByIdAndUpdate(bookId, bookDetails);
    
    if (!book) {
      throw new NotFoundException(`Book with #${bookId} not found`);
    }
    return book;
  }

  async deleteCart(bookId: string) {
    const cart = await this.bookCartItemModel.findByIdAndDelete(bookId);

    if (!cart) {
      throw new NotFoundException(`Book with #${bookId} not found`);
    }
    return cart;
  }

  async getUserCart() {
    const booksCart = await this.bookCartItemModel.find({});
    if (!booksCart && booksCart.length === 0) {
      throw new NotFoundException('cart Not Found');
    }
    return booksCart
  }


}
