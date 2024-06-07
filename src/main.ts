import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // only take properties of dto
      forbidNonWhitelisted: true // Throw error if client sends diff properties of dto
    })
  )
  await app.listen(3000);
}
bootstrap();
