import { ApiProperty } from '@nestjs/swagger';
import { Answer } from '../entities/answer.entity';

export class CreateQuestionDto {
  @ApiProperty()
  text: string;

  @ApiProperty({ type: [Answer] })
  answers: Answer[];
}
