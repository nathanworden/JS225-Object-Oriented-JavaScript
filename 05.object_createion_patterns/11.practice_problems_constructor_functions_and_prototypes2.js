// var shape = {
//   getType: function() {
//     return this.type;
//   },
// }

// function Triangle(a, b, c) {
//   this.a = a;
//   this.b = b;
//   this.c = c;
//   this.type = 'triangle';
// }

// Triangle.prototype = shape;

// Triangle.prototype.getPerimeter = function() {
//   return this.a + this.b + this.c;
// };

// Triangle.prototype.constructor = Triangle; 

// var t = new Triangle(3, 4, 5);
// console.log(t.constructor);
// console.log(shape.isPrototypeOf(t));
// console.log(t.getPerimeter());
// console.log(t.getType());


//  One thing that you may miss to do is to set the constructor to the property value. Typically, this is done for you automatically, in that a function's prototype object will automatically have a property `constructor` pointing to the function. However in this case, since we pointed the `Triangle` function's prototype to `shape`, we lost that `constructor` reference. Therefore we have to set it back manually.

// Not also that we placed the `getPerimeter` method on the object assigned to the `prototype` property of the `Triangle` function so that we can leverage that it's a function new operator and, as such, can share methods (behavior).



// 2)
// Since a constructor is just a function, it can be called without the `new` operator, and this can lead to unexpected results and errors especially for inexperienced programmers.

// Write a constructor function that can be used with or without the `new` operator, and return the same result in either form. Use the code below to check your solution:

// function User(first, last) {
//   if (!(this instanceof User)) {
//     return new User(first, last);
//   } 

//     this.name = first + ' ' + last;
// }

// var name = 'Jane Doe';
// var user1 = new User('John', 'Doe');
// var user2 = User('John', 'Doe');

// console.log(name);          // Jane Doe
// console.log(user1.name);    // Jane Doe
// console.log(user2.name);    // Jane Doe



// 3) Create a function that can create an object with a given object as its prototype, without using  `Object.Create`

// function createObject(obj) {
//   function F() {}
//   F.prototype = obj;
//   return new F();
// }


// var foo = {
//   a: 1
// };

// var bar = createObject(foo);
// console.log(foo.isPrototypeOf(bar));         // true





// 4) Similar to the problem above, without using `Object.create`, create a `begetObject` method that you can call on any object to create an object inherited from it:


// var foo = {
//   a: 1,
//   // begetObject: function(obj) {
//   //   function F() {}
//   //   F.prototype = this;
//   //   return new F();
//   // }
// };

// Object.prototype.begetObject = function() {
//   function F() {}
//     F.prototype = this;
//     return new F();
// }

// var bar = foo.begetObject();
// console.log(foo.isPrototypeOf(bar));        // true




// 5) 
// Create a function `neww`, so that it works like the `new` operator. For this practice problem, you may use `Object.create`.

function neww(constructor, args) {
  var object = Object.create(constructor.prototype);
  var result = constructor.apply(object, args);

  return typeof result === 'object' ? result : object;
}

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greeting = function() {
  console.log('Hello, ' + this.firstName + ' ' + this.lastName);
};

var john = neww(Person, ['John', 'Doe']);
john.greeting();          // => Hello, John Doe
console.log(john.constructor);         // Person(firstName, lastName) {...}


























