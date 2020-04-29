// function helloFactory() {
//   return function() {
//     console.log('hi');
//   };
// }

// helloFactory()();
// var hello = helloFactory();
// hello();


function timed(func) {
  return function() {
    var start = new Date();
    func();
    var stop = new Date();
    console.log((stop - start).toString() + ' ms have elapsed');
  };
}

// var timedHi = timed(function() {console.log('hi'); });
// console.log(timedHi);
// timedHi();

function loopy() {
  var sum = 0;
  var i;

  for (i = 1; i < 1000000000; i += 1) {
    sum += i;
  }

  console.log(sum);
}

loopy();

// timed(loopy)();

var timedLoopy = timed(loopy);
timedLoopy();