// Prototype Chain Lookup for Property Access

// When we try to access a property or a method on an object, JavaScript searches not only in the object itself, but all the objects on its prototype chain, until the end is reached. Let us look at a simple example:

// var foo = {
//   a: 1,
//   b: 2,
// };

// var bar = Object.create(foo);
// var baz = Object.create(bar);

// bar.a;    // 1
// baz.a;    // 1
// baz.c;    // undefined


//

var foo = {
  name: 'dogo',
  hello: function() {
    return 'hello ' + this.name;
  },
};

var bar = Object.create(foo);
bar.name = 'world';
console.log(bar.hello());      // returns hello world

// In this case, the `hello` method is found on the `bar` object's prototype oboject, then called with the context of the `bar` object itself.

// Prototypal Inheritance and Behavior Delegation.

// JavaScript's prototype chain lookup for properties gives us the ability to store an object's data and behaviors not just in the object itself, but anywhere on its prototype chain. This is very powerful when we want to share data or behaviors:

var dog = {
  say: function() {
    console.log(this.name + ' says Woof!');
  },

  run: function() {
    console.log(this.name + ' runs away.');
  },
};

var fido = Object.create(dog);
fido.name = 'Fido';
fido.say();       // => Fido says Woof!
fido.run();       // => Fido runs away.

var spot = Object.create(dog);
spot.name = 'Spot';
spot.say();       // => Spot says Woof!
spot.run();       // => Spot runs away.

//  We may have thousands (or more!) of dogs in our program, but instead of defining the `say` and  `run` methods on every object, we defined those methods on `dog`, the prototype object of all dogs. This gives us several advantages:
 // - We can create dogs much more easily with the `dog` prototype, and don't have to duplicate `say` and `run` on every single dog object.
 // - If we need to add/remove/update behavior to apply to all dogs, we can just modify the prototype object, and all dogs will pick up the changed behavior automatically.





// Some people call this pattern JavaScript's Prototypal Inheritance. the word "inheritance" comes from the classical object oriented programming languages (Java, C++, Ruby, Python, etc.) where classes are used to create objects with a carefully designed hierarchy for the purpose of behavior sharing. JavaScript doesn't have true classes, but in a true object oriented (as opposed to "class orinted") say, objects can be created difrectly from other objects and behaviors (methods) can be shared via the prototype chain.

// From a top down/ design time point of view, the objects on the bottom of the prototype chain "inherited" the properties and behaviors of all the upstream objects on the prototype chain; from a bottom up/ run time point of view, objects on the bottom of the prototype chain can "delegate" request to the upstreab objects to be handled. Hence this design pattern is also called Behavior Delegation.



// Overridging Default Behavior

// OBjects created from prototypes can ovverride shared bahaviors by defining the same methods locally:

var dog ={
  say: function() {
    console.log(this.name + ' says Woof!');
  },
};

var fido = Object.create(dog);
fido.name = 'Fido';
fido.say = function() {
  console.log(this.name + ' says Woof Woof!');
};

fido.say();             // => Fido says Woof Woof!
var spot = Object.create(dog);
spot.name = 'Spot';
spot.say();             // => Spot says Woof!

// The `say` method is overriden locally on the `fido` object, but it doesn't impact any other objects created fro the prototype.

//  Object.getOwnPropertyNames and object.hasOwnProperty

// With behavior delegation, using `obj.prop` !== undefined is no longer a reliable to test if a property is defined on an object - that expression returns true as long as `prop` is defined anywhere on the object's prototype chain. JavaScript gives you the following two methods to check an object's own property:

 // - The `hasOwnProperty` method on an object tests if a property is defined on the object itself.
//  - The `Object.getOwnPropertyNames` method returns an array of an object's own property names.

var foo = {
  a: 1,
};

var bar = Object.create(foo);
bar.a = 1;
bar.b = 2;
bar.hasOwnProperty('a');         // true
Object.getOwnPropertyNames(bar); // ["a", "b"]

console.log(foo.hasOwnProperty('b'));

delete bar.a;
bar.hasOwnProperty('a')
Object.getOwnPropertyNames(bar);

console.log(foo.hasOwnProperty('a'));

////


// Methods on Object.prototype

//  The `Object.prototype` object is on the top of all JavaScript object's prototype chain, therefore the methods defined there can be called from any JavaScript object. Here are 3 useful ones:

// Object.prototype.toString() - Returns a string representation of the object
// Object.prototype.isPrototypeOf(obj) - tests if the object is in another object's prototype chain
// Object.prototype.hasOwnProperty(prop) - tests whether the property is defined on the object itself.


//1
// 2

far.hasOwnProperty('myProp');















































