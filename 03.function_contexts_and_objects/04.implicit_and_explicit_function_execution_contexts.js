// Every time a JavaScript function is invoked , it has access to an object called the execution context of that function.

// The execution context is accessible through the keyword `this`.

// The rules for `this` binding are entirely different than the rules for determining the scope of a variable. While variable scope is determined at the time of writing the code, `this` gets bound based on how a function is invoked.

// function foo() {
//   return 'this here is: ' + this;
// }

// console.log(foo());



////


// var object = {
//   foo: function () {
//     return 'this here is: ' + this;
//   },
// };

// object.foo();              // "this here is: [object Object]"

// var bar = object.foo;
// bar();                     // "this here is: [object Window]"

// This example shows that binding a function to a context object occurs when you execute the function, not when you define it.



// var foo = {
//   bar: function () {
//     return this;
//   },
// };

// foo.bar() === foo; // true

// // Its important to reiterate here that implicit execution context is bound upon invocation, not definition. Consider the example below:

// var foo = {
//   bar: function () {
//     return this;
//   },
// };

// var baz = foo.bar;

// console.log(baz() === foo);      // false
// console.log(baz() === global);   // true



///////////////
// Explicit Function Execution Context

// JavaScript lets us use the call and apply methods to change a function's execution context at execution time. This is, we can explicitly bind a function's execution context to an object when we execute the function.

// var a = 1;

// var object = {
//   a: 'hello',
//   b: 'world',
// };

// function foo() {
//   return this.a;
// };

// console.log(foo());
// console.log(foo.call(object));



////////////

// var strings = {
//   a: 'hello',
//   b: 'world',
//   foo: function () {
//     return this.a + this.b;
//   },
// };


// var numbers = {
//   a: 1, 
//   b: 2,
// };


// console.log(strings.foo.call(numbers)); // 3
// console.log(strings.foo()); //'helloworld'



////////////

var iPad = {
  name: 'iPad',
  price: 40000,
};

var kindle = {
  name: 'kindle',
  price: 30000,
};

function printLine(lineNumber, punctuation) {
  console.log(lineNumber + ': ' + this.name + ', ' + this.price / 100 + ' dollars' + punctuation);
}

printLine.call(iPad, 1, ';');     // => 1: iPad, 400 dollars;
printLine.call(kindle, 2, '.');   // => 2: kindle, 300 dollars.
printLine.apply(iPad, [1, '.']);

// Call: Count the Commas (you have to coun the number of arguments to match the called function)
// Apply: Arguments as Array


























