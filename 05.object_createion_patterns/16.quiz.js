var foo = {};

var bar = Object.create(foo);

bar.counter = 33;

var baz = Object.create(bar);

baz.counter = 33;


console.log(baz.getOwnPropertyNames().includes('counter'))

// console.log(baz.counter);