// var sum = 0;
// var numbers;

// sum += 10;
// sum += 31;

// numbers = [1, 7, -3, 3];


// console.log(sum += (function(arr) {
//   return arr.reduce(function(sum, number) {
//     sum += number;
//     return sum;
//   }, 0);
// })(numbers));  // ?



// // sum is already a global variable, so the name clashes with the function named sum.

// // varibale naming conflict.




function countdown(num) {
  (function recursiveSub(n){
    if (n < 0)  {
      console.log('Done!');
    } else {
      console.log(n)
      recursiveSub(n - 1)
    }
  })(num)
}

countdown(20);


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