import { Test, TestingModule } from '@nestjs/testing';
import { YarnController } from './yarn.controller';

describe('YarnController', () => {
  let controller: YarnController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [YarnController],
    }).compile();

    controller = module.get<YarnController>(YarnController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
