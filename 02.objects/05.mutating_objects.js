// function change(a) {
//   a = 2;
//   console.log(a);
// }

// var b = 1;
// change(b);
// console.log(b);


// /////

// function increment(thing) {
//   thing.count += 1;
//   console.log(thing.count);
// }

// var counter = { count: 0 };
// console.log(counter);

// increment(counter);
// console.log(counter);


/////

// Primitive Values are stored on the Stack
// String
// Number
// Boolean
// Undefined
// Null
// Symbol

var name = 'Max'
console.log(name);

var secondName = name;
console.log(secondName);

name = 'Chris';
console.log(secondName);

var person = {
  age: 28,
  name: 'Max',
  hobbies: ['Sports', 'Cooking'],
};

var thirdPerson = {
  age: 28,
  name: 'Max',
  hobbies: ['Sports', 'Cooking'],
};

console.log(person);

// var secondPerson = person;
var secondPerson = Object.assign({}, person);
console.log(secondPerson);

var myHobbies = person.hobbies.slice();

person.name = 'Chris';
person.hobbies.push('Reading');
console.log(secondPerson);

console.log(thirdPerson);

console.log(myHobbies);


//// Reference Values are stored on the Heap
// Object
// Array








