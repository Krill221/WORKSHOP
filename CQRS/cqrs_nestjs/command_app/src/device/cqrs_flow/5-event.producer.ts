import { Inject, Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Kafka, Producer } from 'kafkajs';

@Injectable()
export class DeviceEventProducer implements OnModuleInit, OnModuleDestroy {
  private producer: Producer;

  @Inject(ConfigService)
  private readonly config: ConfigService;

  public async onModuleInit(): Promise<void> {
    const kafka: Kafka = new Kafka({
      clientId: 'device',
      brokers: [ this.config.get('KAFKA_URL')],
    });

    this.producer = kafka.producer();

    await this.producer.connect();
  }

  public onModuleDestroy(): void {
    this.producer.disconnect();
  }

  public produce<T>(topic: string, event: T): void {
    console.log("run: produce DeviceEventProducer")
    console.log(event)
    this.producer.send({ topic: topic, messages: [{ value: JSON.stringify(event) }] });
  }
}
