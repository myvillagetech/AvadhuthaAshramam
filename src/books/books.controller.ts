import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
@ApiTags('Books')
export class BooksController {
  constructor(private readonly booksService: BooksService) { }

  @Post()
  async createbook(@Res() response, @Body() createBookDto: CreateBookDto) {
    try {
      const newBook = await this.booksService.createBook(createBookDto);
      return response.status(HttpStatus.CREATED).json({
        message: 'Book created successfully',
        success: true,
        newBook,
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Book not created!',
        error: error,
        success: false,
      });
    }
  }

  @Put('/:id')
  async updateBook(
    @Res() response,
    @Param('id') bookId: string,
    @Body() bookDetails: UpdateBookDto,
  ) {
    try {
      const existingBook = await this.booksService.updateBook(
        bookDetails,
        bookId,
      );
      return response.status(HttpStatus.OK).json({
        message: 'Book Details successfully updated',
        existingBook,
        success: true,
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Failed to update Book',
        error: error,
        success: false,
      });
    }
  }

  @Get()
  async getAllBooks(@Res() response) {
    try {
      const bookData = await this.booksService.getAllBooks();
      return response.status(HttpStatus.OK).json({
        message: 'Books data found successfully',
        data: bookData,
        success: true,
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Failed to get all Books',
        error: error,
        success: false,
      });
    }
  }

  @Get('/:id')
  async getBookById(@Res() response, @Param('id') bookId: string) {
    try {
      const bookData = await this.booksService.getBookById(bookId);
      return response.status(HttpStatus.OK).json({
        message: 'Book data found successfully',
        data: bookData,
        success: true,
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Failed to get Book',
        error: error,
        success: false,
      });
    }
  }

  @Delete('/:id')
  async deleteBook(@Res() response, @Param('id') bookId: string) {
    try {
      const deletedBook = await this.booksService.deleteBook(bookId);
      return response.status(HttpStatus.OK).json({
        message: 'Book deleted successfully',
        deletedBook,
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Failed to delete Book',
        error: error,
        success: false,
      });
    }
  }
}
