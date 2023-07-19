# Menu
## ts
```ts
class Menu {
  constructor(name: string, desc: string)

  addDinner(dinnerId: DinnerId): void
  removeDinner(dinnerId: DinnerId): void

  addMenuReview(menuReviewId: MenuReviewId): void
  removeMenuReview(menuReviewId: MenuReviewId): void

}

```
## json

```json
{
  "uuid": "123",
  "name": "Greek dinner",
  "desc": "Greek dinner on fire",

  "hostId": "123",
  "dinnerIds": [
    "123",
  ],
  "menuReviewIds": [
    "123", 
  ]
  
}
```


