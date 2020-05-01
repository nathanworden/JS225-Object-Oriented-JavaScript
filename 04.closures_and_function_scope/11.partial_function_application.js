// function add(first, second) {
//   return first + second;
// }

// // function addOne(value) {
// //   return add(1, value);
// // }

// // console.log(add(1, 2));
// // console.log(add(1, 3015));





// function primaryFunction(arg1, arg2) {
//   console.log(arg1);
//   console.log(arg2);
// }

// function generatorFunction(primary, arg1) {
//   return function(arg2) {
//     return primary(arg1, arg2);
//   }
// }

// var applicatorFunction = generatorFunction(primaryFunction, 'Hello');
// applicatorFunction(37.2);

// //

// function makeAddN(addend) {
//   return function(number) {
//     return add(addend, number);
//   }
// }

// var add1 = makeAddN(1);
// console.log(add1(1));
// console.log(add1(41));

// var add9 = makeAddN(9);
// console.log(add9(1));
// console.log(add9(9));


// function multiply(first, second) {
//   return first * second;
// }

// function makeMultiplyN(multiplicand) {
//   return function(number) {
//     return multiply(multiplicand, number);
//   }
// }


//



// function add(first, second) {
//   return first + second;
// }

// function repeat(count, string) {
//   var result = '';
//   var i;
//   for (i = 0; i < count; i += 1) {
//     result += string;
//   }

//   return result;
// }


// function partial(primary, arg1) {
//   return function(arg2) {
//     return primary(arg1, arg2);
//   };
// }

// var add1 = partial(add, 1);
// console.log(add1(2));

// console.log(add1(6));

// var threeTimes = partial(repeat, 3);
// console.log(threeTimes('Hello '));

// console.log(threeTimes('!'));



function greet(greeting, name) {
  greeting = greeting[0].toUpperCase() + greeting.slice(1);
  console.log(greeting + ", " + name + "!");
}


// greet('howdy', 'Joe');

// greet('good morning', 'Sue');


function partial(primary, arg1) {
  return function(arg2) {
    return primary(arg1, arg2);
  };
}

var sayHello = partial(greet, 'hello');
var sayHi = partial(greet, 'hi');


sayHello('Brandon');

sayHi('Sarah');































