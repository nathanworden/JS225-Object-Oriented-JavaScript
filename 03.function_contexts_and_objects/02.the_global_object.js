var foo = 'foo';
// with `var` declaration, the variable is in the module scope.
// and it is not added to the global object.

bar = 'bar';
// without `var` declaration, the variable is in the global scope and added to the global object


console.log(global.foo);  // => undefined
console.log(global.bar);  // => bar

