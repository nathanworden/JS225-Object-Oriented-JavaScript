function makeBank() {
  let accounts = [];

  function makeAccount(number) {
    let balance = 0;
    let transactions = [];

    return {
      deposit: function(amount) {
        transactions.push({type: 'deposit', amount: amount});
        balance += amount;
        return amount;
      },

      withdraw: function(amount) {
        if (balance < amount) {
          amount = balance;
        }

        transactions.push({type: 'withdrawl', amount: amount});
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
      let number = accounts.length + 101;
      let account = makeAccount(number)
      accounts.push(account);
      return account;
    },

    transfer: function(source, destination, amount) {
      return destination.deposit(source.withdraw(amount));
    },
  };
}

var bank = makeBank();
console.log(bank.accounts);


// var account = makeAccount();
// console.log(account.deposit(15));
// console.log(account.balance);
// var otherAccount = makeAccount();
// console.log(otherAccount.balance);

// var bank = makeBank();
// var account = bank.openAccount();
// console.log(account.number);
// // console.log(bank.accounts);
// console.log(bank.accounts[0]);
// var secondAccount = bank.openAccount();
// console.log(secondAccount.number);

// var bank = makeBank();
// var source = bank.openAccount();
// console.log(source.deposit(10));
// var destination = bank.openAccount();
// console.log(bank.transfer(source, destination, 7));
// console.log(source.balance);
// console.log(destination.balance);


// var bank = makeBank();
// var account = bank.openAccount();
// console.log(account.balance());
// console.log(account.deposit(17));
// var secondAccount = bank.openAccount();
// console.log(secondAccount.number());
// console.log(account.transactions());





















