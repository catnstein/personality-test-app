import { Injectable } from '@nestjs/common';
import { initialData } from './data/initial.data';
import { ComputePersonalityDto } from './dto/compute-personality.dto';
import { CreateQuestionDto } from './dto/create-question.dto';
import { Personality } from './entities/personality-result.entity';
import { Question } from './entities/question.entity';
import { PersonalitySolutionEnum } from './enums/result.enum';

@Injectable()
export class QuestionsService {
  private questions: Question[] = initialData;

  removeAll() {
    this.questions = [];
  }

  create(createQuestionDto: CreateQuestionDto) {
    const response = { ...createQuestionDto, id: this.questions.length };
    this.questions.push(response);
    return response;
  }

  findAll() {
    return this.questions;
  }

  computePersonality(
    computePersonalityDto: ComputePersonalityDto,
  ): Personality {
    const average =
      computePersonalityDto.answers.reduce<number>(
        (acc, answer) => acc + answer.weight,
        0,
      ) / computePersonalityDto.answers.length;

    const result = {
      result:
        average < 2
          ? PersonalitySolutionEnum.Introvert
          : PersonalitySolutionEnum.Extrovert,
    };

    return result;
  }
}
