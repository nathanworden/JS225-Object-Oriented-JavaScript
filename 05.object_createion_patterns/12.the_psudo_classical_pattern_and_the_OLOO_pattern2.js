// The pseudo-classical Pattern

// The Pseudo-classical pattern is a combination of the constructor pattern and the prototype pattern. With this pattern, we use a constructor to set object states, and put shared methods on the constructor function's prototype:

// var Point = function(x, y) {
//   this.x = x || 0;
//   this.y = y || 0;
// };

// Point.prototype.onXAxis = function() {
//   return this.y === 0;
// };

// Point.prototype.onYAxis = function() {
//   return this.x === 0;
// }

// Point.prototype.distanceToOrigin = function() {
//   return Math.sqrt((this.x ** 2) + (this.y ** 2))
// };

// var pointA = new Point(30, 40);
// var pointB = new Point(20);

// console.log(pointA instanceof Point);
// console.log(pointB instanceof Point);
// console.log(pointA.distanceToOrigin());
// console.log(pointB.onXAxis());


////

// The OLOO Pattern

// var Point = {
//   x: 0,
//   y: 0,

//   onXAxis: function() {
//     return this.y === 0;
//   },

//   onYAxis: function() {
//     return this.x === 0;
//   },

//   distanceToOrigin: function() {
//     return Math.sqrt((this.x  ** 2) + (this.y ** 2));
//   },

//   init: function(x, y) {
//     this.x = x;
//     this.y = y;
//     return this;
//   },
// };

// var pointA = Object.create(Point).init(30,40);
// var pointB = Object.create(Point);

// console.log(Point.isPrototypeOf(pointA));        // use isPrototypeOf to check type
// console.log(Point.isPrototypeOf(pointB));
// console.log(pointA.distanceToOrigin());
// console.log(pointB.onXAxis());



///

// JavaScript Design Patterns: Building A Mental Model

// We can create an object that is linked to another object by using `OBject.create(obj)`. This will create a new object, who's `__proto__` property is set to point at `obj`, the object passed in as an argument. 

// var animal = {
//   type: 'mammal',
//   breathe: function() { 
//     console.log("I'm breathing");
//   },
// }

// var dog = Object.create(animal);
// var terrier = Object.create(dog);

// console.log(terrier.type);                 // "mammal"
// console.log(terrier.__proto__)             // {}
// console.log(terrier.__proto__ === dog);    // true
// console.log(terrier.__proto__ === animal); // false
// terrier.breathe()




// var Animal = {
//   init: function(type) {
//     this.type = type;
//   },


//   breathe: function() {
//     console.log("I'm breathing");
//   },
// }

// var Dog = Object.create(Animal);
// var Terrier = Object.create(Dog);

// var mammal = Object.create(Animal);
// mammal.init("mammal");
// var reptile = Object.create(Animal);
// reptile.init("reptile");

// console.log(mammal.type);   // "mammal"
// mammal.breathe();           // "I'm breathing"
// console.log(reptile.type);  // "reptile"
// reptile.breath();           // "I'm breathing"


/////

// `.constructor` tells us the name of the function that created our object.

// function Animal() {
//   this.type = "mammal";

//   this.breathe = function() {
//     console.log("I'm breathing");
//   };
// }

// console.log(Animal.prototype.constructor);






function Animal() {
  this.type = "mammal";
}

var mammal = new Animal();

Animal.prototype.breathe = function() {
  console.log("I'm breathing");
}

function Dog() {
  this.legs = 4;
}
function Terrier() {}

var mammal = new Animal();

Dog.prototype = new Animal();

var dog = new Dog();

console.log(dog.type);    // "mammal"
dog.breathe();            // "I'm breathing"

Dog.prototype.constructor = Dog;


Terrier.prototype = Object.create(Dog.prototype);
Terrier.prototype.constructor = Terrier;

var rex = new Terrier
console.log(rex.type);
console.log(rex.legs);


// The key difference between setting the constructor function's `prototype` equal to objects created with `new` and setting it equal to objects createed with `Object.create(obj)`. With `new` we're causing the code within the constructor function to run and creating a link with a prototype chain but with `Object.create(obj)` we're simply creating the link without executing the code in the constructor function.




















































