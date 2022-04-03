import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { QuestionsModule } from '../src/questions/questions.module';
import { generateQuestionDto } from '../src/questions/helpers/test.helpers';
import { CreateQuestionDto } from 'src/questions/dto/create-question.dto';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [QuestionsModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
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
    it('POST /questions returns the created resource', async () => {
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
});
