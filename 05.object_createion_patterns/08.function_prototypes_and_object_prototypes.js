//  Function Prototypes and Object Prototypes

// JavaScript uses the term "prototype" to represent two related concepts. The furst use of the term is for a property of functions and the second use is to describe the next object in the lookup for property access. 

// How to use the two terms to create a prototype chain for behavior delegation using constructor functions.

// In JavaScript, every function has a special `prototype` property. It is assigned, by default, an object that instances of the constructor function can delegate to. Note that this `prototype` property is only useful when we use the function as a constructor, in which case all objects that it constructs will have this object set as their prototype. This is a mouthful, but it's easier to show this in code:

var Foo = function() {};
var obj = Foo.prototype;

var bar = new Foo();
var baz = new Foo();

Object.getPrototypeOf(bar) === obj;  // true
Object.getPrototypeOf(baz) === obj;  // true

bar.constructor === Foo;             // true; bar is created from Foo
baz.constructor === Foo;             // true; baz is created from Foo
bar instanceof Foo;                  // true; bar is an instance of Foo
baz instanceof Foo;                  // true; baz is an instance of Foo

//

//  To understand better how instances of a constructor function point to the object assigned to its prototype property, let's deconstruct what happens when we call aconstructor function:

function Foo(a, b) {
  this.a = a;
  this.b = b;
}

function Foo(a, b) {
  // this = new Object();               // a new object, or just {}
  // this.--proto-- = Foo.prototype     // have the object inherit from Foo.prototype
  this.a = a;
  this.b = b;
  return this;                          // return the created object
}


// another way to write it, with Object.create()
function Foo(a, b) {
  // this = Object.create(Foo.prototype);
  this.a = a;
  this.b = b;
  return this;                        // return the created object
}


// 


// The key takeaway here is that every time we call a function as a constructor, JavaScript creates objects that are prototype linked to the object that is assined to the `prototype` property. With this understanding, we can use a constructor function and its `prototype` property to set up behavior delegation:

var Dog = function() {}
  

Dog.prototype.say = function() {
  console.log(this.name + ' says Woof!');
}

Dog.prototype.run = function() {
  console.log(this.name + ' runs away.');
}


gar fido = new Dog();
fido.name = 'Fido';
fido.say();             // => Fido says Woof!
fido.run();             // => Fido runs away.

var spot = new Dog();
spot.name = 'Spot';
spot.say();             // => Spot says Woof!
spot.run();             // => Spot runs away.









































