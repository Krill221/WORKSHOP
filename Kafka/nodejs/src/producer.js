import {Kafka} from 'kafkajs';

// Create the client with the broker list
const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['localhost:29092'],
})

// produce a message to a topic
const producer = kafka.producer()

await producer.connect()
await producer.send({
    topic: 'test-topic',
    messages: [
        { value: 'Hello KIRILL221!' },
    ],
})

await producer.disconnect()