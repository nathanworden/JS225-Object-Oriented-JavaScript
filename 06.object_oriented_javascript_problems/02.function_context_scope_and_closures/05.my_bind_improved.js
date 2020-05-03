function myBind(func, ctx) {
  var partialArgs = [].slice.apply(arguments, [2])

  return function() {
    var remainingArgs = [].slice.apply(arguments);
    var fullArgs = partialArgs.concat(remainingArgs);

    return func.apply(ctx, fullArgs);
  }
}

function addNumbers(a, b) {
  return a + b;
}

var addFive = myBind(addNumbers, null, 5);

addFive(10) // 15






// function add(first, second) {
//   return first + second;
// }

// function addOne(value) {
//   return add(1, value);
// }

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

// console.log(add(1, 2));
// console.log(add(1, 3015));


//

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