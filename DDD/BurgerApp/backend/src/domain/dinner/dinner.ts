import { randomUUID } from 'crypto';
import { HostId } from '../host/valueObjects/HostId';
import { ReservationId } from './valueObjects/ReservationId';
import { MenuId } from '../menu/valueObjects/MenuId';
import { AggregateRoot } from '@nestjs/cqrs';

export class Dinner extends AggregateRoot {
  public uuid: string;
  public hostId: HostId;
  public menuId: MenuId;


  constructor(hostId: HostId, menuId: MenuId) {
    super();
    this.uuid = randomUUID();
    this.hostId = hostId
    this.menuId = menuId
  }

  addReservation(reservationId: ReservationId): void {}
  removeReservation(reservationId: ReservationId): void {}
}