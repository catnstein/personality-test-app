import { ApiProperty } from '@nestjs/swagger';
import { Answer } from '../entities/answer.entity';

export class ComputePersonalityDto {
  @ApiProperty({ type: [Answer] })
  answers: Answer[];
}
