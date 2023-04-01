import { Controller, Get, Post, Body, Headers, Param, Delete, Res, HttpStatus, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiParam, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guards';
import { BooksCartService } from './books-cart.service';
import { AddBooksCartDto } from './dto/add-books-cart.dto';
import { UpdateBooksCartDto } from './dto/update-books-cart.dto';

@Controller('booksCart')
@ApiTags('booksCart')
@ApiBearerAuth('access-token')
@UseGuards(JwtAuthGuard)
export class BooksCartController {
  constructor(private readonly booksCartService: BooksCartService) { }

  @ApiParam({
    name: 'Authorization',
    required: false,
    description:
        '(Leave empty. Use lock icon on the top-right to authorize)',
})
  @Post()
  async addBookToCart(@Res() response, @Body() addBookCartDto: AddBooksCartDto, @Headers('Authorization') token : string) {
    try {
      const newBook = await this.booksCartService.createCart(addBookCartDto,token);
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

  @ApiParam({
    name: 'Authorization',
    required: false,
    description:
        '(Leave empty. Use lock icon on the top-right to authorize)',
  })
  @Get()
  async getUserCart(@Res() response, @Headers('Authorization') token : string) {
    try {
      const bookData = await this.booksCartService.getUserCart(token);
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

  
}