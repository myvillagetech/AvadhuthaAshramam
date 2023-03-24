import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BooksOrderService } from './books-order.service';
import { CreateBooksOrderDto } from './dto/create-books-order.dto';
import { UpdateBooksOrderDto } from './dto/update-books-order.dto';

@Controller('books-order')
@ApiTags('books-order')
export class BooksOrderController {
  constructor(private readonly booksOrderService: BooksOrderService) {}

  @Post()
  async create(@Res() response,@Body() createBooksOrderModel: CreateBooksOrderDto) {
    try {
      const newOrder = await this.booksOrderService.createBooksOrder(createBooksOrderModel);
      return response.status(HttpStatus.CREATED).json({
          message: 'Book order has been created successfully',
          success: true,
          newOrder,
      });
  } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
          statusCode: 400,
          message: 'Error: book order not created!',
          error: err,
          success: false,
      });
  }
  }

  // @Get()
  // findAll() {
  //   return this.booksOrderService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.booksOrderService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateBooksOrderDto: UpdateBooksOrderDto) {
  //   return this.booksOrderService.update(+id, updateBooksOrderDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.booksOrderService.remove(+id);
  // }
}
