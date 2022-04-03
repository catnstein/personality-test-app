import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionsModule } from './questions/questions.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [QuestionsModule],
})
export class AppModule {}
