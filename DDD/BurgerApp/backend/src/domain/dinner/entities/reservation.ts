import { randomUUID } from 'crypto';
import { DinnerId } from '../valueObjects/DinnerId';
import { GuestId } from 'src/domain/guest/valueObjects/GuestId';

export class Reservation {
  public uuid: string;
  public dinnerId: DinnerId;
  public guestId: GuestId;


  constructor(dinnerId: DinnerId, guestId: GuestId) {
    this.uuid = randomUUID();
    this.dinnerId = dinnerId
    this.guestId = guestId
  }
}