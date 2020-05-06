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

const arr = ['a', 'b'];
console.log(arr.join('')) // 'ab'