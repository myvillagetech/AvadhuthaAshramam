import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BooksCartService } from './books-cart.service';
import { AddBooksCartDto } from './dto/add-books-cart.dto';
import { UpdateBooksCartDto } from './dto/update-books-cart.dto';

@Controller('books/cart')
@ApiTags('books/cart')
export class BooksCartController {
  constructor(private readonly booksCartService: BooksCartService) { }

  @Post()
  async addBookToCart(@Res() response, @Body() addBookCartDto: AddBooksCartDto) {
    try {
      const newBook = await this.booksCartService.createCart(addBookCartDto);
      return response.status(HttpStatus.CREATED).json({
        message: 'cart created successfully',
        success: true,
        newBook,
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: cart not created!',
        error: error,
        success: false,
      });
    }
  }

  @Put('/:id')
  async updateBookQuantity(
    @Res() response,
    @Param('id') bookId: string,
    @Body() bookCartDetails: UpdateBooksCartDto,
  ) {
    try {
      const existingBook = await this.booksCartService.updateCart(
        bookCartDetails,
        bookId,
      );
      return response.status(HttpStatus.OK).json({
        message: 'cart Details successfully updated',
        existingBook,
        success: true,
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Failed to update cart',
        error: error,
        success: false,
      });
    }
  }

  @Delete('/:id')
  async deleteBookFromCart(@Res() response, @Param('id') bookId: string) {
    try {
      const deleteCart = await this.booksCartService.deleteCart(bookId);
      return response.status(HttpStatus.OK).json({
        message: 'Book deleted successfully',
        deleteCart,
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

  @Get()
  async getUserCart(@Res() response) {
    try {
      const bookData = await this.booksCartService.getUserCart();
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
}