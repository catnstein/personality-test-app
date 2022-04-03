import { ApiProperty } from '@nestjs/swagger';
import { Answer } from './answer.entity';

export class Question {
  @ApiProperty()
  text: string;

  @ApiProperty({ type: [Answer] })
  answers: Answer[];
}
