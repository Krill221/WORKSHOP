
// !!!
class Command {
  constructor(clientName, operationName, amount){
    this.clientName = clientName
    this.operationName = operationName
    this.amount = amount
  }
}
class Query {
  constructor(clientName, operationName){
    this.clientName = clientName
    this.operation = operationName
    this.rows = 0;
  }
}

//  client Collection
class Client {
  constructor(name){
    this.name = name
    this.balance = 0
  }
}
class ClientsTable {
  static add(name){
    const client = new Client(name)
    ClientsTable.collection.set(name, client)
    return client
  }
  static find(name){
    return ClientsTable.collection.get(name)
  }
}
ClientsTable.collection = new Map()

// Operations DICT
const operations = {
  withdraw: command => {
    const acc = ClientsTable.find(command.clientName)
    acc.balance -= command.amount
  },
  income: command => {
    const acc = ClientsTable.find(command.clientName)
    acc.balance += command.amount
  }
}


// 
class Bank {
  constructor() {
    this.commands = []
    this.queries = []
  }
  // run command and log it
  runTransaction(client, amount, operationName){
    const command = new Command(client.name, operationName, Math.abs(amount) )
    this.commands.push(command)
    operations[operationName](command)
  }

  // run query and log it
  select({client, operationName}){
    const ans = this.commands
    .filter( c => c.clientName === client.name && c.operationName === operationName)
    const query = new Query(client.name, operationName)
    query.rows = ans.length
    this.queries.push(query)
    return ans
  }
}

// Usage
const acc1 = ClientsTable.add('Rabbit')
const acc2 = ClientsTable.add('Wolf')


/// COMMANDS
console.log('COMMANDS')
const bank = new Bank()
// Run transaction
bank.runTransaction(acc1, 1000, 'income')
bank.runTransaction(acc1, 1000, 'income')
bank.runTransaction(acc1, 50, 'withdraw')
bank.runTransaction(acc2, 500, 'income')
bank.runTransaction(acc2, 100, 'income')
bank.runTransaction(acc2, 50, 'withdraw')
// Select * form Bank.commands where name = 'Rabbit' and operationName = 'income'
bank.select({client: acc1, operationName: 'income'})
console.table(bank.commands)
console.table(bank.queries)

// QUERIES
console.log('QUERIES')
console.table(ClientsTable.collection)







