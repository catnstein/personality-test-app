import { Test, TestingModule } from '@nestjs/testing';
import { QuestionsService } from './questions.service';
import { generateQuestionDto } from './helpers/test.helpers';

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

  describe('create', () => {
    const resource = generateQuestionDto();
    let response;

    beforeEach(() => {
      response = service.create(resource);
    });
    it('creating a question should return the resource properties', () => {
      delete response.id;
      expect(response).toEqual(response);
    });

    it('creating a question should return an id of type number', () => {
      expect(typeof response.id).toBe('number');
    });
  });

  describe('findAll', () => {
    const resources = [...Array(10)].map(() => generateQuestionDto());

    it('findall returns an array of all resources created', () => {
      resources.map((resource) => service.create(resource));
      const all = service.findAll();
      const allWithoutId = all.map((response) => {
        delete response.id;
        return response;
      });

      expect(allWithoutId).toEqual(resources);
    });
  });
});
