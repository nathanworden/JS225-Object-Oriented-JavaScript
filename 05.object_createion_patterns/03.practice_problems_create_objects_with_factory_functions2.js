var invoice = {
  phone: 3000,
  internet: 6500,
};
var payment = {
  phone: 1300,
  internet: 5500,
};
var invoiceTotal = invoice.phone + invoice.internet;
var paymentTotal = payment.phone + payment.internet;
var remainingDue = invoiceTotal - paymentTotal;

console.log(paymentTotal);         // => 6800
console.log(remainingDue);         // => 2700


function createInvoice(services) {
  var services = services || {};
  return {
    phone: services.phone || 3000,
    internet: services.internet || 5500,
    payments: 0,
    total: function() {
      return this.phone + this.internet;
    },
    addPayment: function(payment) {
      this.phone -= payment.phone || 0;
      this.internet -= payment.internet || 0;
      this.payments += payment.amount || 0;
    },
    addPayments: function(arr) {
      arr.forEach(payment => {
        this.addPayment(payment);
      })
    },
    amountDue: function() {
      console.log(this.total() - this.payments);
    }
  }
}

function invoiceTotal(invoices) {
  var total = 0;
  var i;

  for (i = 0; i < invoices.length; i += 1) {
    total += invoices[i].total();
  }

  return total;
}

// var invoices = [];
// invoices.push(createInvoice());
// invoices.push(createInvoice({
//   internet: 6500,
// }));

// invoices.push(createInvoice({
//   phone: 2000,
// }));

// invoices.push(createInvoice({
//   phone: 1000,
//   internet: 4500,
// }));

// console.log(invoiceTotal(invoices));             // => 31000


/////////////


function createPayment(services) {
  var services = services || {};
  return {
    phone: services.phone || 0,
    internet: services.internet || 0,
    amount: services.amount || undefined,
    total: function() {
      return services.amount || this.internet + this.phone;
    },
  }
}

function paymentTotal(payments) {
  var total = 0;
  var i;

  for (i = 0; i < payments.length; i += 1) {
    total += payments[i].total();
  }

  return total;
}

var invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

var payment1 = createPayment({
  amount: 2000,
});

var payment2 = createPayment({
  phone: 1000,
  internet: 1200,
});

var payment3 = createPayment({
  phone: 1000,
});

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
invoice.amountDue();       // this should return 0





