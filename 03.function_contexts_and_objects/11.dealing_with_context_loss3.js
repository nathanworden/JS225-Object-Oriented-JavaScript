//  Function as Argument Losing Surrounding Context

function repeatThreeTimes(func) {
  func();
  func();
  func();
}

var john = {
  firstName: 'John',
  lastName: 'Doe',
  greetings: function() {
    repeatThreeTimes(function() {
      console.log('hello, ' + this.firstName + ' ' + this.lastName);
    });
  },
};

john.greetings();

// In this example, we call repeatThreeTimes with a function argument that contains this. repeatThreeTimes calls its argument three times, but each time it does so without an explicit context. As we've learned, this means the context is the global object. Thus, this inside the function is the global object, not john.

// If you think that this problem happens infrequently, consider this code:

var obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    [1, 2, 3].forEach(function(number) {
      console.log(String(number) + ' ' + this.a + ' ' + this.b);
    });
  },
};

obj.foo();

// It looks simple enough; the code loops over an array and logs some information to the console. The problem, though, is that forEach executes the anonymous function passed to it, so it gets executed with the global object as context. Once again, this has the wrong value, and the function doesn't do what we want.

// This problem is easy to fix. You can use the same solutions we used to solve the problem in the previous assignment.

// Use a local variable in the lexical scope to store this

var obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    var self = this;
    [1, 2, 3].forEach(function(number) {
      console.log(String(number) + ' ' + self.a + ' ' + self.b);
    });
  },
};

obj.foo();



// Bind the argument function with the surrounding context


var obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    [1, 2, 3].forEach(function(number) {
      console.log(String(number) + ' ' + this.a + ' ' + this.b);
    }.bind(this));
  },
};

obj.foo();


// Use the optional thisArg argument

// Some methods that take function arguments allow an optional argument that defines the context to use when executing the function. Array.prototype.forEach, for instance, has an optional thisArg argument for the context. This argument makes it easy to work around this context loss problem.

var obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    [1, 2, 3].forEach(function(number) {
      console.log(String(number) + ' ' + this.a + ' ' + this.b);
    }, this);
  },
};

obj.foo();




































