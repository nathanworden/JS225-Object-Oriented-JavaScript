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
//   this.area = RECTANGLE.area.call(this);
//   this.perimeter = RECTANGLE.perimeter.call(this);
// }

// var rect1 = new Rectangle(2, 3);
// console.log(rect1.area);              // NaN
// console.log(rect1.perimeter);         // NaN



// function Circle(radius) {
//   this.radius = radius;
//   this.area = function() {
//     return Math.PI * (radius ** 2);
//   }
// }

// var a = new Circle(3);
// var b = new Circle(4);

// console.log(a.area().toFixed(2)); // => 28.27
// console.log(b.area().toFixed(2)); // => 50.27



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
//   Ninja.prototype.swung = true;
//   return Ninja.prototype;
// }

// console.log(ninjaA.swing().swung);      // must log true
// console.log(ninjaB.swing().swung);      // must log true


var ninjaA = (function() {
  function Ninja(){};
  return new Ninja();
})();

// create a ninjaB object

var ninjaB = Object.create(ninjaA);

console.log(ninjaB.constructor === ninjaA.constructor);    // should log true













