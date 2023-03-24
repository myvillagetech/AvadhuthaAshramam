import { Test, TestingModule } from '@nestjs/testing';
import { BooksOrderService } from './books-order.service';

describe('BooksOrderService', () => {
  let service: BooksOrderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BooksOrderService],
    }).compile();

    service = module.get<BooksOrderService>(BooksOrderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
