import { CqrsModule } from "@nestjs/cqrs";
import { DevicesController } from "./cqrs_flow/1-devices.controller";
import { DevicesService } from "./cqrs_flow/2-devices.service";
import { Module } from "@nestjs/common";
import { DeviceCreatedHandler } from "./cqrs_flow/4-device-created-event.handler";
import { CreateDeviceHandler } from "./cqrs_flow/3-create-device-command.handler";
//import { EventSourcingModule } from "nestjs-event-sourcing";
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DeviceEventProducer } from "./cqrs_flow/5-event.producer";


@Module({
  imports: [
    CqrsModule,
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    // EventSourcingModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useFactory: (config: ConfigService) => ({ mongoUrl: config.get('COMMAND_DB_URL'), }),
    //   inject: [ConfigService],
    // }),
  ],
  controllers: [
    DevicesController
  ],
  providers: [
    DevicesService,
    CreateDeviceHandler,
    DeviceCreatedHandler,
    DeviceEventProducer,
  ],
})
export class DevicesModule{

  constructor(
  ) {}
}