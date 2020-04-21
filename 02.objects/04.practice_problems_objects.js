var invoices = {
  unpaid: [],

  add: function(name, amount) {

    this.unpaid.push({
      name: name, 
      amount: amount,}
    );
  }
};

invoices.totalDue = function() {
  return this.unpaid.reduce((acc, client) => {
    return acc += client.amount;
  }, 0);
}

invoices.totalPaid = function() {
  return this.paid.reduce((acc, client) => {
    return acc += client.amount;
  }, 0);
}

invoices.paid = [];

invoices.payInvoice = function(clientName) {
  let unpaid = [];
  this.unpaid.forEach(invoice => {
    if (invoice.name === clientName) {
      this.paid.push(invoice);
    } else {
      unpaid.push(invoice);
    }
  });

  this.unpaid = unpaid;
}



invoices.add("Due North Development", 250);
invoices.add("Moonbeam Interactive", 187.50);
invoices.add("Slough Digital", 300);

// console.log(invoices.totalDue());

// console.log(invoices);

// invoices.payInvoice("Slough Digital");
// console.log(invoices.paid);

invoices.payInvoice("Due North Development");
invoices.payInvoice("Slough Digital");

console.log(invoices.totalPaid());
console.log(invoices.totalDue());