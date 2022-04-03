import { Controller, Get, Post, Body, Delete } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Question } from './entities/question.entity';

@Controller('questions')
@ApiTags('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Post()
  @ApiResponse({
    status: 201,
    type: Question,
    description: 'Create Question',
  })
  create(@Body() createQuestionDto: CreateQuestionDto) {
    return this.questionsService.create(createQuestionDto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    type: [Question],
    description: 'Returns All Questions',
  })
  findAll() {
    return this.questionsService.findAll();
  }

  @Delete()
  @ApiResponse({
    status: 200,
    description: 'Returns No Content',
  })
  removeAll() {
    return this.questionsService.removeAll();
  }
}
