import { Controller, Get, Post, Body, Delete } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Question } from './entities/question.entity';
import { ComputePersonalityDto } from './dto/compute-personality.dto';
import { Personality } from './entities/personality-result.entity';

@Controller('questions')
@ApiTags('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Post()
  @ApiOperation({ operationId: 'createQuestion' })
  @ApiResponse({
    status: 201,
    type: Question,
    description: 'Create Question',
  })
  create(@Body() createQuestionDto: CreateQuestionDto) {
    return this.questionsService.create(createQuestionDto);
  }

  @Get()
  @ApiOperation({ operationId: 'getAllQuestions' })
  @ApiResponse({
    status: 200,
    type: [Question],
    description: 'Returns All Questions',
  })
  findAll() {
    return this.questionsService.findAll();
  }

  @Post('compute-personality')
  @ApiOperation({ operationId: 'computePersonality' })
  @ApiResponse({
    status: 200,
    type: Personality,
    description: 'Returns Result of the Quiz',
  })
  async computePersonality(
    @Body() computePersonalityDto: ComputePersonalityDto,
  ) {
    return this.questionsService.computePersonality(computePersonalityDto);
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
