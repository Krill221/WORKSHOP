


class Account {
  constructor(name){
    this.name = name
    this.balance = 0
  }
  // Command
  withdraw(amount){ this.balance -= amount }
  income(amount){ this.balance += amount }

  // Query
  getBalance(){ return this.balance }
  available(amount){ return this.balance >= amount }
}

class Bank {
  constructor() {
    this.accounts = new Map()
  }
  // Command
  openAccount(name, balance = 0){
    if( this.accounts.get(name) ) return false
    const newAccount = new Account(name)
    newAccount.income(balance)
    this.accounts.set(name, newAccount)
    return true
  }
  transfer(from, to, amount){
    const source = this.accounts.get(from)
    const dest = this.accounts.get(to)
    if( !source || !dest ) return false
    if( !source.available(amount) ) return false
    source.withdraw(amount)
    dest.income(amount)
    return true
  }
  // Query
  total(){
    let sum = 0;
    for(const account of this.accounts.values()){
      sum += account.getBalance()
    }
    return sum
  }
  
}


// Usage
const bank = new Bank()
bank.openAccount('Rabbit', 1000)
bank.openAccount('Wolf')
console.table( bank.accounts)
bank.transfer('Rabbit', 'Wolf', 400)
console.table( bank.accounts)