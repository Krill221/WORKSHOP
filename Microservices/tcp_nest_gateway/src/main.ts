import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

const logger = new Logger('Main gateway')

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  logger.log('Client gateway up!...')
}
bootstrap();
