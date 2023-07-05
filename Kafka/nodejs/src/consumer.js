import {Kafka} from 'kafkajs';

// Create the client with the broker list
const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['localhost:29092'],
})
// consume a message to a topic
const consumer = kafka.consumer({ groupId: 'test-group' })


await consumer.connect()
await consumer.subscribe({ topic: 'test-topic', fromBeginning: true })

await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
        console.log({
            value: message.value.toString(),
        })
    },
})



