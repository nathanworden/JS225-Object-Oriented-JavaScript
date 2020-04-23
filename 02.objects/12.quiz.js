// var foo = {};
// var bar = foo;

// var a = 10;
// var b = a;

// foo.a = a;
// foo.b = foo.a;
// console.log(`a: ${a}`);
// console.log(foo);

// a += 10;
// foo.a += 10;
// console.log(`a: ${a}`);
// console.log(foo);

// console.log(bar);

// b === a;          // false
// foo.a === bar.a;  // true



function makeObj() {
  return {thing: 'yes'};
}

var first = makeObj();
var second = makeObj();

console.log(first);
console.log(second);

console.log(first === second);