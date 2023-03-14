import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MODEL_ENUMS } from 'src/shared/enums/model.enum';
import { AddBookDto } from './dto/add-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { BookDocument } from './schemas/books.schemas';

@Injectable()
export class BooksService {
  @InjectModel(MODEL_ENUMS.BOOKS) private bookModel: Model<BookDocument>;

  async getAllBooks() {
    const books = await this.bookModel.find({});
    if (!books && books.length === 0) {
      throw new NotFoundException('Books Not Found');
    }
    return books
  }

  async getBookById(bookId: string) {
    const book = await this.bookModel.findById(bookId);
    if (book) {
      return book;
    } else {
      throw new NotFoundException('Book data not found!');
    }
  }

  async addBook(addBookDto: AddBookDto) {
    const newUser = await new this.bookModel(addBookDto);
    return newUser.save();
  }

  async updateBook(bookDetails: UpdateBookDto, bookId: string) {
    const book = await this.bookModel.findByIdAndUpdate(bookId, bookDetails);
    
    if (!book) {
      throw new NotFoundException(`Book with #${bookId} not found`);
    }
    return book;
  }

  async deleteBook(bookId: string) {
    const book = await this.bookModel.findByIdAndDelete(bookId);

    if (!book) {
      throw new NotFoundException(`Book with #${bookId} not found`);
    }
    return book;
  }
}
