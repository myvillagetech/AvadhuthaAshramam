import { PartialType } from '@nestjs/swagger';
import { CreateBooksOrderDto } from './create-books-order.dto';

export class UpdateBooksOrderDto extends PartialType(CreateBooksOrderDto) {}
