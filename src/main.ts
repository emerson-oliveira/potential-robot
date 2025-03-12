import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Finance Management API')
    .setDescription('API para gerenciamento de transações financeiras') 
    .setVersion('1.0')
    .addTag('accounts')
    .addTag('transactions')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(3000);
  console.log(`Documentação do Swagger disponível em: http://localhost:3000/api/docs`);

}
bootstrap();