# Host

## TS
```ts
class Host {
  constructor(userId: UserId): Host

  addDinner(dinnerId: DinnerId): void
  removeDinner(dinnerId: DinnerId): void

  addMenu(menuId: DinnerId): void
  removeMenu(menuId: MenuId): void
}

```

## json
```json
{
  "uuid": "123",

  "userId": "123",
  "dinnerIds": [
    "123",
  ],
  "menuIds": [
    "123",
  ],
}
```


