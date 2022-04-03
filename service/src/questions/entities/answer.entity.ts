import { ApiProperty } from '@nestjs/swagger';

export class Answer {
  @ApiProperty()
  text: string;

  @ApiProperty()
  weight: number;
}
