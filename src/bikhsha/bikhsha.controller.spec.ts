import { Test, TestingModule } from '@nestjs/testing';
import { BikhshaController } from './bikhsha.controller';
import { BikhshaService } from './bikhsha.service';

describe('BikhshaController', () => {
  let controller: BikhshaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BikhshaController],
      providers: [BikhshaService],
    }).compile();

    controller = module.get<BikhshaController>(BikhshaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
