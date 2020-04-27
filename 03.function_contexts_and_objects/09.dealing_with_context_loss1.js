// Method Losing COntext when Taken Out of Object

// If you remove a method from its containing object and execute it, it loses its context:

function repeatThreeTimes(func) {
  func.call();         // can't do func.call(john) out of scope
  func.call();
  func.call();
}

function foo() {
  var john = {
    firstName: 'John',
    lastName: 'Doe',
    greetings: function() {
    console.log('hello, ' + this.firstName + ' ' + this.lastName);
    },
  };

  repeatThreeTimes(john.greetings.bind(john));
}


console.log(foo());