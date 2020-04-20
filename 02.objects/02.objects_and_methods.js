// JavaScript objects may contain methods among their properties. You can think of methods as Functions with a receiver, which is the object the method is called on. If a call doesn't have an explicit receiver, it is a function. We call these two invocation forms "method invocation" and "function invocation," respectively. We'll discuss the distinctions and nuances between these two forms in the next lesson, "Function Contexts and Objects." For now, we'll show you how to distinguish a function from a method invocation and talk about this, a keyword that is always available when a method executes.


// method - a function with a receiver
// receiver - the object a method is called on.
// If a call doesn't have an explicit receiver, it is a funciton.
// `this` is a keyword that is always avaiable when a method executes.

// Function and Method Invocation

var greeter = {
  morning: function() {
    console.log('Good morning!');
  },
};

function evening() {
  console.log('Good evening!');
}

// Method invocation
greeter.morning();  // greeter is the receiver/calling object; morning() is a method

// Function invocation
evening();          // there is no explicit receiver; evening() is a function


/////////


var greeter = {
  morning: function() {
    console.log('Good morning!');
  },
};

// Method invocation: executing a method
greeter.morning(); // => Good morning!

// Create a varibale which points at the greeter.morning method
var functionGreeter = greeter.morning; // returns [Function: morning]

// FUnction invocation: executing a function
functionGreeter() // => Good morning!


////////////////////// 


var counter = {
  count: 0,
  advance: function() {
    this.count += 1;
  },
};

counter;                      // { count: 0, advance: [Function] }
counter.advance();

counter;                      // { count: 1, advance: [Function] }

counter.advance();
counter.advance();
console.log(counter.count);   // { count: 3, advance: [Function] }



////////////////////// 


// Object methods are properties that happen to have a Function value. You can define methods when you create the object:

var car = {
  fuel: 7.8,
  running: false,
  start: function() {
    this.running = true;
  },
};


// You can also add methods anytime later, the same as other properties:

car.stop = function() {
  this.running = false;
};

// Like any function, object methods can take arguments and use them to perform or contorl the work:

car.drive = function(distance) {
  this.fuel -= distance / 52;
};

console.log(car);
car.start();
console.log(car);
car.stop();
console.log(car);
car.drive = function(distance) {this.fuel -= distance / 52; }
car.drive(139);
console.log(car);






















