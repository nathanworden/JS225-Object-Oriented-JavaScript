// 1)
// What are the two disadvantages of working with factory functions?
// 1. Every object made with the factory has the same methods, which could be redundant.
// 2. There is no way to tell wheter an object was created by any given function.

// 2)
// function makeObj() {
//   return {
//     propA: 10,
//     propB: 20,
//   };
// }



// 3) 
// var invoice = {
//   phone: 3000,
//   internet: 6500,
// };
// var payment = {
//   phone: 1300,
//   internet: 5500,
// };
// var invoiceTotal = invoice.phone + invoice.internet;
// var paymentTotal = payment.phone + payment.internet;
// var remainingDue = invoiceTotal - paymentTotal;

// console.log(paymentTotal);         // => 6800
// console.log(remainingDue);         // => 2700



function createInvoice(services) {
  let invoice = {};
  services = services || {};
  invoice.phone = services.phone || 3000,
  invoice.internet = services.internet ||  5500,
  invoice.amount = 0;
  invoice.total = function() {
    return this.phone + this.internet;
  };
  invoice.addPayment = function(payment) {
    this.amount -= payment.amount || 0;
    this.phone -= payment.phone || 0;
    this.internet -= payment.internet || 0;
  };
  invoice.addPayments = function(payments) {
    payments.forEach(payment => {
      this.addPayment(payment);
    })
  };
  invoice.amountDue = function() {
    return this.phone + this.internet + this.amount;
  }
  return invoice;
};

function invoiceTotal(invoices) {
  var total = 0;
  var i;

  for (i = 0; i < invoices.length; i += 1) {
    total += invoices[i].total();
  }

  return total;
};

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

// // console.log(invoices);
// console.log(invoiceTotal(invoices));             // => 31000




// 4) Now lety's build a factory function to create patments. The function can take an `object` argument in one of 3 forms:
// - Payment for one service, such as: {internet: 1000} or {phone: 1000}
// - Payment for both services, such as: {internet: 2000, phone: 1000}
// - Payment with just an `amount ` property, such as {amount: 2000}


function createPayment(services) {
  services = services || {}
  return {
    phone: services.phone || 0,
    internet: services.internet || 0,
    amount: services.amount || 0,
    total: function () {
      return this.phone + this.internet + this.amount;
    },
  };
}

function paymentTotal(payments) {
  var total = 0;
  var i;

  for (i = 0; i < payments.length; i += 1) {
    total += payments[i].total();
  }

  return total;
}

// var payments = [];
// payments.push(createPayment());
// payments.push(createPayment({
//   internet: 6500,
// }));

// payments.push(createPayment({
//   phone: 2000,
// }));

// payments.push(createPayment({
//   phone: 1000,
//   internet: 4500,
// }));

// payments.push(createPayment({
//   amount: 10000,
// }));

// console.log(paymentTotal(payments));      // => 24000

// 5) Update your `createInvoice` function to make it possible to add payment(s) to invoices. Use the code below as a guideline:

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
console.log(invoice.amountDue());       // this should return 0


































