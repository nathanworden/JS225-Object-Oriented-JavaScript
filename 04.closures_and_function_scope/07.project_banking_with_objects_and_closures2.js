function makeBank() {
  let accounts = [];  

  function makeAccount(number) {
      let balance = 0;
      let transactions = [];

    return {
      deposit: function(amount) {
        transactions.push({type: 'deposit', amount: amount})
        balance += amount;
        return amount;
      },

      withdraw: function(amount) {
        if (amount > this.balance) {
        amount = this.balance;
        } 
  
        transactions.push({type: 'withdrawal', amount: amount})
        balance -= amount;
        return amount;
      },

      balance: function() {
        return balance;
      },
      
      number: function() {
        return number;
      },

      transactions: function() {
        return transactions;
      },
    };
  }

  return {
    openAccount: function() {
      var number = accounts.length + 101;
      let newAccount = makeAccount(number);
      accounts.push(newAccount);
      return newAccount;
    },
    transfer: function(source, destination, amount) {
      return destination.deposit(source.withdraw(amount));
    }
  };
}



var bank = makeBank();
console.log(bank.accounts);