import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthService } from 'src/auth/auth.service';
import { MODEL_ENUMS } from 'src/shared/enums/model.enum';
import { AddBooksCartDto } from './dto/add-books-cart.dto';
import { UpdateBooksCartDto } from './dto/update-books-cart.dto';
import { BookCartDocument } from './schemas/books-cart.schemas';

@Injectable()
export class BooksCartService {
  @InjectModel(MODEL_ENUMS.BOOKS_CART) private bookCartItemModel: Model<BookCartDocument>;

  constructor(private authService : AuthService){}
  
  async createCart(createBooksCartDto: AddBooksCartDto, token : any) {

    const user : any = this.authService.getDecodedToken(token);
    const newCartBook = await new this.bookCartItemModel({...createBooksCartDto, userId : user._id});
    return newCartBook.save();
  }
  
  async updateCart(bookDetails: UpdateBooksCartDto, bookId: string) {
    const book = await this.bookCartItemModel.findByIdAndUpdate(bookId, bookDetails,{new : true});
    
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

  async getUserCart(token : string) {
    const user : any = this.authService.getDecodedToken(token);
    const booksCart = await this.bookCartItemModel.find({
      userId : user._id
    });
    if (!booksCart && booksCart.length === 0) {
      throw new NotFoundException('cart Not Found');
    }
    return booksCart
  }


}
