//Yes:

// (function() {
//   console.log('hello');
// })();


// No:

// function() {
//   console.log('hello');
// }();


(function(a) {
  return a + 1;
})(2);

(function() {
  console.log('hello');
}());

var foo = function() {
  return function() {
    return 10;
  }();
}();

console.log(foo);