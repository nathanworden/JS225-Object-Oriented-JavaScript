// const obj = {
//   monkey: "yep",
// };

// // console.log(typeof obj === 'object');       // true
// // console.log(typeof obj === 'function');     // false

// // console.log(obj.hasOwnProperty('monkey'));  //true
// // console.log(obj.hasOwnProperty('elephant')); // false

// console.log(typeof Object);                   // 'function'

// console.log(obj.__proto__ === Object.prototype);  // true. depreciated
// console.log(Object.getPrototypeOf(obj) === Object.prototype); // true

// console.log(obj.constructor === Object);  // true
// console.log(obj.prototype) // undefined



//  Example 2

// const func = function() {}
// func.call();

// console.log(func.__proto__ === Function.prototype); // true
// console.log(func.constructor === Function);         // true



// Example 3

// const arr = ['a', 'b'];
// console.log(arr.join('')) // 'ab'

// console.log



// Example 4

// const arr = ['a', 'b'];
// console.log(arr.hasOwnProperty(0));     // true

// console.log(arr.__proto__ === Array.prototype); // true
// console.log(arr.constructor === Array); // true
// console.log(Array.prototype.__proto__ === Object.prototype); // true
// console.log(Object.prototype.__proto__); // null
// console.log(arr.fantastical); // undefined

// console.log(Array.__  proto__ === Function.prototype);


// let jorb = function() {
//   // return [].slice.call(arguments);
//   return Array.from(arguments);
// }

// console.log(jorb(1, 2, 3, 4)); 



// Example 5

// const userFunctions = {
//   add: function() {this.point += 1},
//   login: function() {console.log("You're logged in")},
// }

// function userCreator(name, points) {
//   const newUser = Object.create(userFunctions);
//   newUser.name = name;
//   newUser.points = points;
//   return newUser;
// }

// const user = userCreator("Ryan" 3);



// Example 7 //

// function UserCreator(name) {
//   this.name = name;
// }

// UserCreator.prototype.sayName = function() {
//   console.llg(`I'm ${this.name}`);
// }

// function PaidUserCreator(paidName, balance) {
//   UserCreator.call(this, paidName);
//   this.balance = balance;
// }

// PaidUserCreator.prototype.increase = function() {
//   this.balance
// }

// PaidUserCreator.prototype = Object.create(UserCreator.prototype);

// const user1 = newUserCreator("Dean");

// const paidUser1 = new PaidUserCreator("Ryan", 3);





// Example 8

class UserCreator {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(`I'm $this.name}`);
  }
}

class PaidUserCreator extends UserCreator {
  constructor(paidName, balance) {
    super(paidName);
    this.balance = balance;
  }

  increase() {
    thiis.balance += 1;
  }
}

















































