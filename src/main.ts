import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as admin from 'firebase-admin';
import { Logger } from '@nestjs/common/services';
import * as serviceAccount from '../serviceAccountKey.json';
import { ValidationPipe } from '@nestjs/common';
import * as mongoose from 'mongoose';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const port = process.env.PORT ?? 3000;
  const logger = new Logger('main');

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
    databaseURL: 'https://doantotnghiep-cb6d6-default-rtdb.firebaseio.com/'
  });
  mongoose.set('debug', true);

  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    })
  );

  const options = new DocumentBuilder()
      .setTitle('GO CINEMA API')
      .setDescription('Go Cinema API description')
      .setVersion('1.0')
      .addTag('GoCinama')
      .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
