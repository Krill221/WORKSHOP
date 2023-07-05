import { createClient } from 'redis';

const client = createClient();
client.on('error', err => console.log('Redis Client Error', err));
await client.connect();

// DELETE ALL
//await client.flushAll();

// HASH KEY VALUE STRING (USE WITH EXPRESS TO CASH RESPONSE DATA
await client.set('key', 'hello');
const v = await client.get('key');
console.log(v)

// ARRAY (STACK, QUEUE)
await client.lPush('friends', 'Mike');
const friends = await client.lRange('friends', 0, -1);
console.log(friends)

// SET
await client.sAdd('cars', 'bmv');
const cars = await client.sMembers('cars');
console.log(cars)

// HASH
await client.hSet('user1', {
    name: 'John',
    surname: 'Smith',
    company: 'Redis',
    age: 29
})
let userSession = await client.hGetAll('  ');
console.log(userSession);




