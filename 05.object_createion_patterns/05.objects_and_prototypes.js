//  Every JavaScrip Object has a special property, `__proto__` (pronounced "dunder proto"; "dunder" is a compound word for "double underscore"), that points to another object. When we use the `Object.create` method to create an object, it sets the `__proto__` property of the created object to the object passed in:

var foo = {
  a: 1,
  b: 2,
};

var bar = Object.create(foo);
bar.__proto__ === foo;                  // true