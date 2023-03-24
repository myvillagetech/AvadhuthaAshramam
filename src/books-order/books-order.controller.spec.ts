import { Test, TestingModule } from '@nestjs/testing';
import { BooksOrderController } from './books-order.controller';
import { BooksOrderService } from './books-order.service';

describe('BooksOrderController', () => {
  let controller: BooksOrderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BooksOrderController],
      providers: [BooksOrderService],
    }).compile();

    controller = module.get<BooksOrderController>(BooksOrderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
