import { EventPublisher, ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { CreateDeviceCommand } from '../_constant/create-device.command';
import { DeviceAggregateRoot } from '../_aggregate/device.aggregate';

@CommandHandler(CreateDeviceCommand)
export class CreateDeviceHandler implements ICommandHandler<CreateDeviceCommand> {

  constructor(
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: CreateDeviceCommand) {
    console.log("run: execute CreateDeviceHandler")

    const deviceAgg = new DeviceAggregateRoot(command.deviceDto)

    // put event to EVENT STORE => WRITE_DB
    //await this.eventSourcingHandler.save(deviceAgg);

    // NEST CQRS EVENTPUBLISHER
    const deviceModelWithEvent = this.publisher.mergeObjectContext( deviceAgg );
    deviceModelWithEvent.commit();
    
  }
}