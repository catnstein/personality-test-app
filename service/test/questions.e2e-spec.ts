import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { QuestionsModule } from '../src/questions/questions.module';
import { generateQuestionDto } from '../src/questions/helpers/test.helpers';
import { CreateQuestionDto } from '../src/questions/dto/create-question.dto';
import { PersonalitySolutionEnum } from '../src/questions/enums/result.enum';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [QuestionsModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
    await request(app.getHttpServer()).delete('/questions');
  });

  afterEach(async () => {
    await app.close();
  });

  const createQuestion = async (resource: CreateQuestionDto) => {
    const response = await request(app.getHttpServer())
      .post('/questions')
      .send(resource);

    return response;
  };

  describe('POST /questions', () => {
    it('returns the created resource', async () => {
      const resource = generateQuestionDto();
      const { body } = await createQuestion(resource);
      delete body.id;

      expect(body).toEqual(resource);
    });
  });

  describe('GET /questions', () => {
    it('no init returns empty array', () => {
      return request(app.getHttpServer())
        .get('/questions')
        .expect(200)
        .expect([]);
    });

    it('after a POST, array with the created resource is returned', async () => {
      const createQuestionDto = generateQuestionDto();
      const createQuestionResponse = await createQuestion(createQuestionDto);

      return request(app.getHttpServer())
        .get('/questions')
        .expect(200)
        .expect([createQuestionResponse.body]);
    });
  });

  describe('POST /questions/compute-personality', () => {
    it('introvert - returns appropriate response', async () => {
      const createQuestionDto = generateQuestionDto();
      return request(app.getHttpServer())
        .post('/questions/compute-personality')
        .send({ answers: [createQuestionDto.answers[3]] })
        .expect(201)
        .expect({ result: PersonalitySolutionEnum.Extrovert });
    });
  });
});
