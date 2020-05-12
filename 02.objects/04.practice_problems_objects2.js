let invoices = {
  unpaid: [],
  add: function(name, amount) {
    this.unpaid.push({
      name: name,
      amount: amount,
    });
  },
}

invoices.totalDue = function() {
  let total = 0;
  this.unpaid.forEach(invoice => {
    total += invoice.amount;
  });
  return total;
}

invoices.paid = [];

invoices.payInvoice = function(name) {
  let updatedUnpaid = [];
  this.unpaid.forEach(invoice => {
    if (invoice.name === name) {
      this.paid.push(invoice);
    } else {
      updatedUnpaid.push(invoice);
    }
    this.unpaid = updatedUnpaid;
  })
}

invoices.totalPaid = function() {
  let total = 0;
  this.paid.forEach(invoice => {
    total += invoice.amount;
  });
  return total;
}

// invoices.add('Hardware store', 5612);
invoices.add('Due North Development', 250);
invoices.add('Moonbeam Interactive', 187.50);
invoices.add('Slough Digital', 300);
// console.log(invoices.totalDue());

invoices.payInvoice('Due North Development');
invoices.payInvoice('Slough Digital');
console.log(invoices.totalPaid());
console.log(invoices.totalDue());