import { Injectable } from '@nestjs/common';
import { initialData } from './data/initial.data';
import { CreateQuestionDto } from './dto/create-question.dto';
import { Answer } from './entities/answer.entity';
import { Question } from './entities/question.entity';
import { PersonalityResult } from './enums/result.enum';

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

  computePersonality(answers: Answer[]) {
    const average =
      answers.reduce<number>((acc, answer) => acc + answer.weight, 0) /
      answers.length;

    return average < 2
      ? PersonalityResult.Introvert
      : PersonalityResult.Extrovert;
  }
}
