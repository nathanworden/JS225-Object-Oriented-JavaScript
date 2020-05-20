function MyClass() {

}

MyClass.prototype.method = function() {

}

function MySubClass() {
  MyClass.call(this);
}

MySubClass.prototype = Object.create(MyClass.prototype);
MySubClass.prototype.constructor = MySubClass;

MySubClass.prototype.method = function() {
  MyClass.prototype.method.call(this);
}

///


// function fn() {
//   return this.val;
// }

// var object1 = {
//   get: fn,
//   val: 42,
// };

// var object2 = {
//   get: fn,
//   val: 3.14159,
// };

// var object3 = {
//   get: fn,
//   val: 84,
// };



////////


// var parent = {
//   get: function fn() {
//     return this.val;
//   },
//   val: 42,
// };

// var child = Object.create(parent);
// console.log(child.__proto__);



////////////

// Every single object has a prototype (except for the base object and any objects you create yourself that explicitly don't have prototypes.)


// var myObject = {};
// function myFunction() {};
// var noPrototype = Object.create(null);

// console.log(myObject.__proto__ === Object.prototype);
// console.log(myFunction.__proto__ === Function.prototype);
// console.log(noPrototype.__proto__ === undefined);


////

// var answer = {
//   get: function fn1() {
//     return this.val;
//   },
//   val: 42,
// };

// var firmAnswer = Object.create(answer);
// firmAnswer.get = function fn2() {
//   return this.val + "!!";
// };

// console.log(answer.get());
// console.log(firmAnswer.get())


////


// var AnswerPrototype = {
//   get: function fn1() {
//     return this.val;
//   },
//   swang: function() {
//     return "scwang scwang";
//   }
// };

// var lifeAnswer = Object.create(AnswerPrototype);
// lifeAnswer.val = 42;
// // console.log(lifeAnswer.get()); // 42


// var dessertAnswer = Object.create(AnswerPrototype);
// dessertAnswer.val = 3.14159;
// // console.log(dessertAnswer.get()); // 3.14159


// var FirmAnswerPrototype = Object.create(AnswerPrototype);
// FirmAnswerPrototype.get = function fn2() {
//   return AnswerPrototype.get.call(this) + "!!";
// };

// var luckyAnswer = Object.create(FirmAnswerPrototype);
// luckyAnswer.val = 7;
// console.log(luckyAnswer.get());
// console.log(luckyAnswer.swang());


// var magicAnswer = Object.create(FirmAnswerPrototype);
// magicAnswer.val = 3;
// console.log(magicAnswer.get());




//////
// extend

// Having an underscore in front of a property is a common convention in Javascript to say that this is a private property.


// var AnswerPrototype = {
//   constructor: function fn0(value) {
//     this._val = value;
//   },
//   get: function fn1() {
//     return this._val;
//   }
// };

// var lifeAnswer = Object.create(AnswerPrototype);
// lifeAnswer.constructor(42);
// console.log(lifeAnswer.get());

// var dessertAnswer = Object.create(AnswerPrototype);
// dessertAnswer.constructor(3.14159);
// console.log(dessertAnswer.get());

// var FirmAnswerPrototype = Object.create(AnswerPrototype);
// FirmAnswerPrototype.get = function fn2() {
//   return AnswerPrototype.get.call(this) + "!!";
// };

// var luckyAnswer = Object.create(FirmAnswerPrototype);
// luckyAnswer.constructor(7);
// console.log(luckyAnswer.get());

// var magicAnswer = Object.create(FirmAnswerPrototype);
// magicAnswer.constructor(3);





////


// var AnswerPrototype = {
//   constructor: function fn0(value) {
//     this._val = value;
//   },
//   get: function fn1() {
//     return this._val;
//   }
// };

// var lifeAnswer = Object.create(AnswerPrototype);
// lifeAnswer.constructor(42);
// console.log(lifeAnswer.get());


// var dessertAnswer = Object.create(AnswerPrototype);
// dessertAnswer.constructor(3.14159);
// console.log(dessertAnswer.get());

// ////


// function fn0() {

// };

// var AnswerPrototype = {
//   constructor: function fn0() {
//     this._val = 42;
//   }
// };



//

// var AnswerPrototype = {
//   constructor: function fn0(value) {
//     this._val = value;
//   },
//   get: function fn1() {
//     return this._val;
//   }
// };

// var lifeAnswer = Object.create(AnswerPrototype);
// lifeAnswer.constructor(42);
// lifeAnswer.get();

// var dessertAnswer = Object.create(AnswerPrototype);
// dessertAnswer.constructor(3.14159);
// dessertAnswer.get(); // 3.14159

// //

// function Answer(value) {
//   this._val = value;
// }

// Answer.prototype.get = function fn1() {
//   return this._val;
// };

// var lifeAnswer = new Answer(42);
// lifeAnswer.get();
// var dessertAnswer = new Answer(3.14159);
// dessertAnswer.get();



//

// function Answer(value) {
//   this._val = value;
// }

// Answer.prototype.get = function fn1() {
//   return this._val;
// };

// var lifeAnswer = new Answer(42);
// lifeAnswer.get();

// var dessertAnswer = new Answer(3.14159);
// dessertAnswer.get();

// function FirmAnswer(value) {
//   Answer.call(this, value);
// }

// FirmAnswer.prototype = Object.create(Answer.prototype);
// FirmAnswer.prototype.constructor = FirmAnswer;

// FirmAnswer.prototype.get = function fn2() {
//   return Answer.prototype.get.call(this) + "!!";
// };

// var luckyAnswer = new FirmAnswer(7);
// luckyAnswer.get();

// var magicAnswer = new FirmAnswer(3);
// magizAnswer.get();




///////


// Prototypal Model

// var AnswerPrototype = {
//   constructor: function fn0(value) {
//     this._val = value;
//   },
//   get: function fn1() {
//     return this._val;
//   }
// };

// var lifeAnswer = Object.create(AnswerPrototype);
// lifeAnswer.constructor(42);
// lifeAnswer.get();

// var dessertAnswer = Object.create(AnswerPrototype);
// dessertAnswer.constructor(3.14159);
// dessertAnswer.get();

// var FirmAnswerPrototype = Object.create(AnswerPrototype);







class Answer {
  constructor(value)
}



























































































