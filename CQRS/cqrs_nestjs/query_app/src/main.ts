import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';



async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);

  await addSwagger(app)
  await lintenKafka(app, [config.get('KAFKA_URL')]);
  await app.listen(4000);
}

async function addSwagger(app) {
  const swagger = new DocumentBuilder()
    .setTitle('Device web api')
    .setDescription('The Device app API description')
    .setVersion('1.0')
    .addTag('appTag')
    .build();
  const document = SwaggerModule.createDocument(app, swagger);
  SwaggerModule.setup('api', app, document);
}


async function lintenKafka(app, brokers): Promise<void> {

  app.enableShutdownHooks();
  app.connectMicroservice(
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: 'device',
          brokers: brokers,
        },
        consumer: {
          groupId: 'device-svc',
        },
      },
    },
    { inheritAppConfig: true },
  );

  await app.startAllMicroservices();
}

bootstrap();