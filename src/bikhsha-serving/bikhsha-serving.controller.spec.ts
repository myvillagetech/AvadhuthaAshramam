import { Test, TestingModule } from '@nestjs/testing';
import { BikhshaServingController } from './bikhsha-serving.controller';
import { BikhshaServingService } from './bikhsha-serving.service';

describe('BikhshaServingController', () => {
  let controller: BikhshaServingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BikhshaServingController],
      providers: [BikhshaServingService],
    }).compile();

    controller = module.get<BikhshaServingController>(BikhshaServingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
