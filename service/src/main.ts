import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as yaml from 'yaml';
import * as fs from 'fs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Questions example')
    .setDescription('The questions API description')
    .setVersion('1.0')
    .addTag('questions')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  const yamlDocument: string = yaml.stringify(document, {});

  fs.writeFileSync('./openapi/service-api.yml', yamlDocument);
  SwaggerModule.setup('api', app, document);

  app.enableCors();

  await app.listen(9229);
}
bootstrap();
