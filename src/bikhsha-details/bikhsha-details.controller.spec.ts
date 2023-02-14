import { Test, TestingModule } from '@nestjs/testing';
import { BikhshaDetailsController } from './bikhsha-details.controller';
import { BikhshaDetailsService } from './bikhsha-details.service';

describe('BikhshaDetailsController', () => {
  let controller: BikhshaDetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BikhshaDetailsController],
      providers: [BikhshaDetailsService],
    }).compile();

    controller = module.get<BikhshaDetailsController>(BikhshaDetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
