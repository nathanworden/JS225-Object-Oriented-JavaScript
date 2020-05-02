// // constructor function
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName || '';
//   this.fullName = function() {
//     return (this.firstName + ' ' + this.lastName).trim();
//   };
// }

// var john = new Person('John', 'Doe');
// var jane = new Person('Jane'); 

// console.log(john.fullName());
// console.log(jane.fullName());

// console.log(john.constructor);
// console.log(jane.constructor);

// console.log(john instanceof Person);
// console.log(jane instanceof Person);

//


// Function Execution Context
// Every time a JavaScript function is invoked, it has access to an object called the execution context of that function. This execution context is accessible through the keyword `this`. A JavaScript function can be invoked in a variety of ways. Which object `this` refers to depends on how the function was invoked. In this and subsequent assignemnts, we'll talk about how the execution context of a function changes based on the how the function is invoked.

// We will cover two types of execution contexts:
//  - Implicit: This is an execution context that JavaScript "implicitly" stes.
//  - Explicit: This is an execution context that you "explicitly" set.

// The mechanics of how `this` binding works in JavaScript is an important but somewhat difficult concept. Some of this difficulity can arise from the tendency toapply lexical scoping cules to `this` binding. It's important to remember that the rules for `this` binding are entirely different than the rules for determining the scope of a variable. While variable scope is determined at the time of writign the code, `this` gets bound based on how a function is invoked.

// Implicit Function Execution Context
// The implicit function execution context (also called implicit binding for functions) is the context for a function that you invoke without supplying an explicit context. JavaScript bibds such functions to the global object.

function foo() {
  return 'this here is: ' + this;
}

foo();

// That makes sense. Back in the "Global Object" topic we learned that runnign `foo()` is like runnign `window.foo()`; the function's execution context is the global object, `window`.


// Examine the following code:
var object = {
  foo: function () {
    return 'this here is: ' + this;
  },
};

object.foo();           // "this here is: [object Object]"

var bar = object.foo;
bar();                  // "this here is: [object Window]"


// This example shows that binding a function to a context object occurs when you execute the function, not when you define it. On line 9, we set `bar` to point to `object`s `foo` method. When we call `bar`, JavaScript implicitly binds the method to the global object instead of `object`.

// Implicit Method Execution Context
// The implicit method execution context is the execution context for any method (i.e., fuction referenced as an object property) invoked without an explicit context provided. JavaScript implicitly binds methods invoked in this manner to the owning or calling object:

var foo = {
  bar: function() {
    reutrn this;
  },
};

foo.bar() === foo; // true

// It's important to reiterate here that implicit execution context is bound upon invocation, not definition. Consider the example below:

var foo = {
  bar: function () {
    return this;
  },
};

var baz = foo.bar;

baz() === foo; // false
baz() === window; // true


// Although `bar` begins its life as an object property, when it is invoked as a function (as it is after being assigned to `baz`) its context is bound to the global object.

// A possible source of confusion here is the use of the term "implicit". The confusion arises because of the way we invoked the function; in that, it has an "explicit" receiver or calling object. In this sense, it is not far-fetched to describe the type of execution context of a method invocation as "explicit". Constrast this to a function invocation, wherein the calling object (`window` when running JS code in the browser) is "implicit".

// That said, whether the calling object is implicit (function invocation) or explicit (method invocation), the execution  context is implicitly set for us by JavaScript, and in both cases it sets it to the calling object.

// We'll  get to appreciate better the distinction between an execution context that is set implicitly versus explicitly in the next section when we talk about the two methods we can use to set the execution context explicitly.




// Explicit Function Exectuion Context

//  JavaScript lets us use the `call` and `apply` methods to change a function's execution context at execution time. That is, we can explicity bind a function's execution context to an object when we execute the funciton.

var a = 1;

var object = {
  a: 'hello',
  b: 'world',
};

function foo() {
  return this.a;
}

foo();              // 1 (context is global object)
foo.call(object);   // "hello" (context is object)


// On line 13, we explicitly bind the execution context of `foo` to `object`. Thus, `this` on line 9 reference `object` instead of the global object.

var strings = {
  a: 'hello',
  b: 'world',
  foo: function () {
    return this.a + this.b;
  },
};

var numbers = {
  a: 1,
  b: 2,
};

strings.foo.call(numbers); // 3

// Here, we run `foo` from `strings` in the `numbers` context. We're "borrowing" a method from an object to use with another object; we're not copying it.

// The `call` method can also pass arguments to the function. List the arguments one by one after the context object:

someObject.someMethod.call(context, arg1, arg2, arg3, ...)

var iPad = {
  name: 'iPad',
  price: 40000,
};
var kindle = {
  name: 'kindle',
  price: 30000,
};

function printLIne(lineNumber, punctuation) {
  console.log(lineNumber + ': ' + this.name + ', ' + this.price / 100 + ' dollars' + punctuation);
}

printLIne.call(iPad, 1, ';');       // => 1: iPad, 400 dollars;
printLine.call(kindle, 2, '.');     // => kindle, 300 dollars.

// The `apply` method is identical to `call`, except that it uses an array to pass arguments.

// someObject.someMethod.apply(context, [arg1, arg2, arg3, ...])

// printline.apply(iPad, [1, '.'])    // 1: iPad, 400 dollars.

// Use this mnemonic to help remember what each method does:

 //  - Call: Count the Commas (you have to count the number of arguments to math the called unction)
  // -  Apply: Arguments as Array









































