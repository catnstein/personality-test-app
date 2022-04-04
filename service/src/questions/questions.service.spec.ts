import { Test, TestingModule } from '@nestjs/testing';
import { QuestionsService } from './questions.service';
import { generateQuestionDto } from './helpers/test.helpers';
import { PersonalitySolutionEnum } from './enums/result.enum';
import { CreateQuestionDto } from './dto/create-question.dto';
import { ComputePersonalityDto } from './dto/compute-personality.dto';

describe('QuestionsService', () => {
  let service: QuestionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuestionsService],
    }).compile();

    service = module.get<QuestionsService>(QuestionsService);
    service.removeAll();
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

  describe('compute personality', () => {
    describe('submitted response for only one question', () => {
      let questionDto: CreateQuestionDto;

      beforeEach(() => {
        questionDto = generateQuestionDto();
      });

      it('responding with answer with weight 1 -> result is introvert', () => {
        const answer = questionDto.answers[0];
        const answersDto: ComputePersonalityDto = { answers: [answer] };
        expect(service.computePersonality(answersDto)).toEqual({
          result: PersonalitySolutionEnum.Introvert,
        });
      });

      it('responding with answer with weight 2 -> result is introvert', () => {
        const answer = questionDto.answers[1];
        expect(service.computePersonality({ answers: [answer] })).toEqual({
          result: PersonalitySolutionEnum.Introvert,
        });
      });

      it('responding with answer with weight 3 -> result is introvert', () => {
        const answer = questionDto.answers[2];
        expect(service.computePersonality({ answers: [answer] })).toEqual({
          result: PersonalitySolutionEnum.Extrovert,
        });
      });

      it('responding with answer with weight 4 -> result is introvert', () => {
        const answer = questionDto.answers[3];
        expect(service.computePersonality({ answers: [answer] })).toEqual({
          result: PersonalitySolutionEnum.Extrovert,
        });
      });
    });

    describe('submitted response for 2 questions', () => {
      it('having submitted 2 questions with weight < 2 -> result is introvert', () => {
        const questionDtos = [...Array(2)].map(() => generateQuestionDto());
        const answer1 = questionDtos[0].answers[0];
        const answer2 = questionDtos[1].answers[1];

        expect(
          service.computePersonality({ answers: [answer1, answer2] }),
        ).toEqual({
          result: PersonalitySolutionEnum.Introvert,
        });
      });

      it('having submitted 2 questions with weight < 2 -> result is introvert', () => {
        const questionDtos = [...Array(2)].map(() => generateQuestionDto());
        const answer1 = questionDtos[0].answers[0];
        const answer2 = questionDtos[1].answers[1];

        expect(
          service.computePersonality({ answers: [answer1, answer2] }),
        ).toEqual({ result: PersonalitySolutionEnum.Introvert });
      });

      it('having submitted 2 questions with average > 2 -> result is extrovert', () => {
        const questionDtos = [...Array(2)].map(() => generateQuestionDto());
        const answer1 = questionDtos[0].answers[1];
        const answer2 = questionDtos[1].answers[3];

        expect(
          service.computePersonality({ answers: [answer1, answer2] }),
        ).toEqual({
          result: PersonalitySolutionEnum.Extrovert,
        });
      });
    });

    describe('submitted response for 3 questions', () => {
      it('having submitted 3 questions with weight < 2 -> result is introvert', () => {
        const questionDtos = [...Array(3)].map(() => generateQuestionDto());
        const answer1 = questionDtos[0].answers[2];
        const answer2 = questionDtos[1].answers[1];
        const answer3 = questionDtos[2].answers[1];

        expect(
          service.computePersonality({ answers: [answer1, answer2, answer3] }),
        ).toEqual({ result: PersonalitySolutionEnum.Introvert });
      });

      it('having submitted 3 questions with weight < 2 -> result is introvert', () => {
        const questionDtos = [...Array(3)].map(() => generateQuestionDto());
        const answer1 = questionDtos[0].answers[1];
        const answer2 = questionDtos[1].answers[1];
        const answer3 = questionDtos[2].answers[3];

        expect(
          service.computePersonality({ answers: [answer1, answer2, answer3] }),
        ).toEqual({ result: PersonalitySolutionEnum.Introvert });
      });

      it('having submitted 3 questions with average > 2 -> result is extrovert', () => {
        const questionDtos = [...Array(3)].map(() => generateQuestionDto());
        const answer1 = questionDtos[0].answers[1];
        const answer2 = questionDtos[1].answers[3];
        const answer3 = questionDtos[2].answers[3];

        expect(
          service.computePersonality({ answers: [answer1, answer2, answer3] }),
        ).toEqual({ result: PersonalitySolutionEnum.Extrovert });
      });

      it('having submitted 3 questions with average == 2 -> result is introvert', () => {
        const questionDtos = [...Array(3)].map(() => generateQuestionDto());
        const answer1 = questionDtos[0].answers[1];
        const answer2 = questionDtos[1].answers[1];
        const answer3 = questionDtos[2].answers[1];

        expect(
          service.computePersonality({ answers: [answer1, answer2, answer3] }),
        ).toEqual({ result: PersonalitySolutionEnum.Introvert });
      });
    });
  });
});
