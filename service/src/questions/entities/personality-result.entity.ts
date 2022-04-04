import { ApiProperty } from '@nestjs/swagger';
import { PersonalitySolutionEnum } from '../enums/result.enum';

export class Personality {
  @ApiProperty({
    enum: [
      PersonalitySolutionEnum.Introvert,
      PersonalitySolutionEnum.Extrovert,
    ],
  })
  result: PersonalitySolutionEnum;
}
