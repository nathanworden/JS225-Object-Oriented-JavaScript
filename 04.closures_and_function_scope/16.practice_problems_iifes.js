// (function() {
//   console.log("Sometimes, syntax isn't intuitive!")
// })();


// var sum = 0;
// var numbers;

// sum += 10;
// sum += 31;

// numbers = [1, 7, -3, 3];

// sum += (function (arr) {
//   return arr.reduce(function(sum, number) {
//     sum += number;
//     return sum;
//   }, 0);
// })(numbers);

// console.log(sum);

// // sum += sum(numbers);


// 4)
function countdown(count) {
  (function recursiveSub(n) {
    console.log(n);

    if (n === 0) {
      console.log('Done!');
    } else {
      recursiveSub(n - 1);
    }
  })(count);
}


countdown(7);


// 5) 

// (function foo() {
//   console.log('Bar');
// })();

// foo();

