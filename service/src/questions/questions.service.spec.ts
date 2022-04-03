import { Test, TestingModule } from '@nestjs/testing';
import { QuestionsService } from './questions.service';

describe('QuestionsService', () => {
  let service: QuestionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuestionsService],
    }).compile();

    service = module.get<QuestionsService>(QuestionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('creating a question should return the resource', () => {
    const resource = { text: 'asd', answers: [{ text: 'asd', weight: 1 }] };
    service.create(resource);

    expect(service.findAll()).toEqual([resource]);
  });
});
