# Dinner

## ts

```ts
// Root
class Dinner {
  constructor(hostId: HostId, menuId: MenuId)

  addReservation(reservationId: ReservationId): void
  removeReservation(reservationId: ReservationId): void

}
// Entities
class Reservation {
  constructor(dinnerId: DinnerId, guestId: GuestId): Reservation
}

```
## json

```json
{
  "uuid": "123",
  "name": "Greek dinner on friday",
  "desc": "Greek dinner on friday",

  "hostId": "123",
  "menuId": "123",

  "reservations": [
    {
      "dinnerId": "123",
      "guestId": "123"
    },
  ]
}
```


