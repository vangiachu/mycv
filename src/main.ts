import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
const cookieSession = require('cookie-session');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieSession({
    keys: ['chugia'],
    }),
  );
  app.useGlobalPipes(
    new ValidationPipe({
      // chi lay nhung field co trong Dto; nhap them se ko chap nhan!!!
      whitelist: true
    })
  )
  await app.listen(3000);
}
bootstrap();
