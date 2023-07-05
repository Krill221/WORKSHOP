import { IEvent } from '@nestjs/cqrs';

//import { BaseEvent } from 'nestjs-event-sourcing';
// export class DeviceCreatedEventBase extends BaseEvent {
//   constructor(  public readonly deviceDto: DeviceDto) {
//     super()
//   }
// }

export class DeviceCreatedEventBase implements IEvent {
  constructor() {}
}