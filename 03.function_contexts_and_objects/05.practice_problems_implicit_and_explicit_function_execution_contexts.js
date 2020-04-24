// // 1. What will the code below output?
// function func() {
//   return this;
// }

// var context = func();
// console.log(context);


// // object window if you are in the browser.
// // object global if you are in nonde.



// 4)
// 20



// Use apply because it takes an array of argumnets rather than juts a list.

// var fruitsObj = {
//   list: ['Apple', 'Banana', 'Grapefruit', 'Pineapple', 'Orange'],
//   title: 'A Collection of Fruit',
// };


// function outputList() {
//   console.log(this.title + ':');

//   var args = [].slice.call(arguments);

//   args.forEach(function(elem) {
//     console.log(elem);
//   });
// }


// outputList.apply(fruitsObj, fruitsObj.list);
// // outputList.call(fruitsObj, fruitsObj.list);



function example() {
  return [].slice.call(arguments);
}

console.log(example('hello', 'my', 'little', 'friend'));