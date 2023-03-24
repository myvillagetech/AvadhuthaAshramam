import { Test, TestingModule } from '@nestjs/testing';
import { BooksCartController } from './books-cart.controller';
import { BooksCartService } from './books-cart.service';

describe('BooksCartController', () => {
  let controller: BooksCartController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BooksCartController],
      providers: [BooksCartService],
    }).compile();

    controller = module.get<BooksCartController>(BooksCartController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
