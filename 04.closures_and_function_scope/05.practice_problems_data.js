// 1)
// function makeMultipleLister(num) {
//   return function() {
//     for (let i = num; i < 100; i += num) {
//       console.log(i);
//     }
//   };
// }


// var lister = makeMultipleLister(13);
// lister();



// 2)
// let runningTotal = 0;

// function add(num) {
//   console.log(runningTotal += num);
// }

// function subtract(num) {
//   console.log(runningTotal -= num);
// }

// add(1);
// add(42);
// subtract(39);
// add(6);



// 3)
// function later(func, arg) {
//   return function() {
//     func(arg);
//   };
// }

// var logWarning = later(console.log, 'The system is shutting down!');
// logWarning();


// 4) 
function startup() {
  var status = 'ready';
  return function() {
    console.log('The system is ready.');
  };
}

var ready = startup();
var systemStatus = ready();

// I don't think you can.