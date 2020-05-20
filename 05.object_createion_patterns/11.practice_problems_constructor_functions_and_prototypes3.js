// let shape = {
//   getType: function() {
//     return this.type;
//   },
// };

// function Triangle(a, b, c) {
//   this.a = a;
//   this.b = b;
//   this.c = c;
//   this.type = 'triangle';
// }


// Triangle.prototype = shape;
// Triangle.prototype.getPerimeter = function() {
//   return this.a + this.b + this.c;
// }

// Triangle.prototype.constructor = Triangle;


// var t = new Triangle(3, 4, 5);
// console.log(t.constructor);                 // Triangle(a, b, c)
// console.log(shape.isPrototypeOf(t));        // true
// console.log(t.getPerimeter());              // 12
// console.log(t.getType());                   // "triangle"





// function User(first, last) {
//   this.name = first + ' ' + last;
//   return this;
// }

// var name = 'Jane Doe';
// var user1 = new User('John', 'Doe');
// var user2 = User('John', 'Doe');

// console.log(name);         // => Jane Doe
// console.log(user1.name);   // => John Doe
// console.log(user2.name);   // => John Doe




// function createObject(obj) {
//   let tempFunc = function() {

//   } 

//   tempFunc.prototype = obj;
//   return new tempFunc();



//   // let result = {};
//   // result.__proto__ = obj;
//   // return result;
// }



// var foo = {
//   a: 1
// };

// var bar = createObject(foo);
// console.log(foo.isPrototypeOf(bar));         // true


// Object.prototype.begetObject = function() {
//   function F() {}
//   F.prototype = this;
//   return new F();
// }


// var foo = {
//   a: 1,
// };

// var bar = foo.begetObject();
// console.log(foo.isPrototypeOf(bar));         // true


//////




function neww(constructor, args) {
  // this.__proto__ = constructor.prototype;
  var object = Object.create(constructor.prototype);
  // constructor(args[0], args[1]);
  var result = constructor.apply(object, args);
  // return this;

  return typeof result === 'object' ? result : object;
  // return object;
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







































































