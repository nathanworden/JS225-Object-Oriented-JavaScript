// var a = 1;
// var foo;
// var obj;

// function Foo() {
//   this.a = 2;
//   this.bar = function() {
//     console.log(this.a);
//   };
//   this.bar();
// }

// foo = new Foo();   // `this` points to foo. The code gets run. 2 gets printed out

// foo.bar();          // 2
// Foo();              

// obj = {};
// Foo.call(obj);
// obj.bar();

// console.log(this.a);


// // 2
// // 2
// // 1
// // undefined
// // undefined
// // 1


// 2) 

// var RECTANGLE = {
//   area: function() {
//     return this.width * this.height;
//   },
//   perimeter: function() {
//     return 2 * (this.width + this.height);
//   },
// };

// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
//   this.area = RECTANGLE.area.call(this);                 // undefined * undefined = NaN
//   this.perimeter = RECTANGLE.perimeter.call(this);
// }

// var rect1 = new Rectangle(2, 3);
// console.log(rect1.area);                // NaN
// console.log(rect1.perimeter);           // NaN




// 3) 
// Write a constructor function `Circle`, that takes a `radius` as an argument. You should be able to call an `area` method on the created objects to get the circle's area. Test your implementation with the following code:


// function Circle(radius) {
//   this.radius = radius;
// }

// Circle.prototype.area = function() {
//   return Math.PI * this.radius ** 2;
// }


// var a = new Circle(3);
// var b = new Circle(4);

// console.log(a.area().toFixed(2));    // => 28.27
// console.log(b.area().toFixed(2));    // => 50.27


// 4)  What will the following code log out and why?

// var ninja;
// function Ninja() {
//   this.swung = true;
// }

// ninja = new Ninja();                                  // 

// Ninja.prototype.swingSword = function() {
//   return this.swung;
// };

// console.log(ninja.swingSword());  // true


// 5) What will the following code log out and why?

// var ninja;
// function Ninja() {
//   this.swung = true;
// }

// ninja = new Ninja();

// Ninja.prototype = {
//   swingSword: function() {
//     return this.swung;
//   },
// };

// console.log(ninja.swingSword());  // Uncaought TypeError: ninja.swingSqord is not a function



// 6) Implement the method descibed in the comments below:

// var ninjaA;
// var ninjaB;
// function Ninja() {
//   this.swung = false;
// }

// ninjaA = new Ninja();
// ninjaB = new Ninja();

// // Add a swing method to the Ninja prototype which
// // returns the calling object and modifies swung

// Ninja.prototype.swing = function() {
//   this.swung = true;
//   return this;
// }

// console.log(ninjaA.swing().swung);      // must log true
// console.log(ninjaB.swing().swung);      // must log true




// 7)


var ninjaA = (function() {
  function Ninja(){};
  return new Ninja();
})();

// create a ninjaB object

var ninjaB = Object.create(Object.getPrototypeOf(ninjaA));

console.log(ninjaB.constructor === ninjaA.constructor);    // should log true


// Solution 2: use the constructor function

var ninjaB = new ninjaA.constructor;






























































