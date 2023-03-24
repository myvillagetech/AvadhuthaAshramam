import { Test, TestingModule } from '@nestjs/testing';
import { BooksCartService } from './books-cart.service';

describe('BooksCartService', () => {
  let service: BooksCartService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BooksCartService],
    }).compile();

    service = module.get<BooksCartService>(BooksCartService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
