// 1) What are the characteristics that define higher-order functions?
// Higher order functions work on other functions. They can take one or more functions as arguemnts and return functions, or both.


// 2) 
// var numbers = [1, 2, 3, 4];
// function checkEven(number) {
//   return number % 2 === 0;
// }

// console.log(numbers.filter(checkEven));

// filter is the higher order function because it takes another function as an argument.


// 3) 
// var numbers  = [1, 2, 3, 4];

// function makeCheckEven() {
//   return function(number) {
//     return number % 2 === 0;
//   };
// }

// var checkEven = makeCheckEven();

// console.log(numbers.filter(checkEven));


//  4)

// function execute(func, operand) {
//   return func(operand);
// }

// var log1 = execute(function(number) {
//   return number * 2;
// }, 10);     // 20

// var log2 = execute(function(string) {
//   return string.toUpperCase();
// }, 'hey there buddy');    // "HEY THERE BUDDY"

// console.log(log1);
// console.log(log2);



// 5)

function makeListTransformer(func) {
  return function(collection) {
    return collection.map(func);
  };
}

var timesTwo = makeListTransformer(function(number) {
  return number * 2;
});

console.log(timesTwo([1, 2, 3, 4]));  // [2, 4, 6, 8]



















