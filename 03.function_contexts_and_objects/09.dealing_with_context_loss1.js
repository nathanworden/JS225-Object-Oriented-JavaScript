// Method Losing COntext when Taken Out of Object

// If you remove a method from its containing object and execute it, it loses its context:

function repeatThreeTimes(func) {
  func();
  func();
  func();
}

function foo() {
  var john = {
    firstName: 'John',
    lastName: 'Doe',
    greetings: function() {
    console.log('hello, ' + this.firstName + ' ' + this.lastName);
    },
  };

  repeatThreeTimes(john.greetings);
}


foo();