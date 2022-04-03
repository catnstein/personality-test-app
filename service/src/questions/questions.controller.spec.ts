import { Test, TestingModule } from '@nestjs/testing';
import { generateQuestionDto } from './helpers/test.helpers';
import { QuestionsController } from './questions.controller';
import { QuestionsService } from './questions.service';

describe('QuestionsController', () => {
  let controller: QuestionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuestionsController],
      providers: [QuestionsService],
    }).compile();

    controller = module.get<QuestionsController>(QuestionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    const resource = generateQuestionDto();
    let response;

    beforeEach(() => {
      response = controller.create(resource);
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
      resources.map((resource) => controller.create(resource));
      const all = controller.findAll();
      const allWithoutId = all.map((response) => {
        delete response.id;
        return response;
      });

      expect(allWithoutId).toEqual(resources);
    });
  });
});
