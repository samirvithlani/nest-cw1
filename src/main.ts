import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
  .setTitle('Products example')
  .setDescription('The products API description')
  .setVersion('1.0')
  .addServer('http://localhost:3000', 'Local server')
  .addTag('products')
  .build();

  const document  =SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-doc', app, document);


  await app.listen(3000);
}
bootstrap();
