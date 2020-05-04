// //  Every JavaScrip `Obj`ect has a special property, `__proto__` (pronounced "dunder proto"; "dunder" is a compound word for "double underscore"), that points to another object. When we use the `Object.create` method to create an object, it sets the `__proto__` property of the created object to the object passed in:

// var foo = {
//   a: 1,
//   b: 2,
// };

// var bar = Object.create(foo);
// console.log(bar.__proto__ === foo);                  // true

// // IN this case, we say that the object assigned to `foo` is the prototype object of the object returned by `Object.create` and assigned to `bar`. We could also say that we careted the object `bar` with object `foo` as its prototype.

// // Object.getPrototypeOf and isPrototypeOf

// // The `__proto__` porperty was first introduced by Firefox as a non-standard object property. In the actual JavaScript specification (up to ECMAScript 5.1), this property is defined as `[[Prototype]]`, which is not a proeprty you can interact with directly. The proprietary `__proto__` property go popular over time and adopted by almost all modern browsers, and it is now standardized in ECMAScript 6 (ES6). But for compatibility reasons, we recommend that you don't use it in your code. Instead, you can use the following tow methods:

// // Object.getPrototypeOf(obj) to get the prototype object of `obj`
// // obj.isPrototypeOf(foo) to theck if `obj` is a prototype object of `foo`.

// var foo = {
//   a: 1,
//   b: 2,
// };

//  var bar = Object.create(foo);
//  Object.getPrototypeOf(bar) === foo;      // true
//  foo.isPrototypeOf(bar);                  // true

//  // Prototype Chain and the Object.prototype Object

//  // We can use `Object.create` to create objects that form a prototype chain:

// var foo = { 
//   a: 1,
//   b: 2,
// };

// var bar = Object.create(foo);
// var baz = Object.create(bar);
// var quz = Object.create(vaz);

// Object.getPrototypeOf(qux) === baz;      // true
// Object.getPrototypeOf(baz) === bar:      // true
// Object.getPrototypeOf(bar) === foo;      // true

// foo.isPrototypeOf(qux);     // true - because foo is on  qux's protogype chain.


// // The  `Object.prototype` object is at the end of the prototype chain for all JavaScript objects. If you don't create an object from a prototype, its prototype is the `Object.prototype` oboject:

// var foo = {
//   a: 1,
//   b: 2,
// };              // created with object literal

// Object.getPrototypeOf(foo) === Object.prototype; // true





// 1)  
var prot = {};
var foo = Object.create(prot);

// 2) 
// console.log(Object.getPrototypeOf(foo) === prot);



// 3) Use `isPrototypeOf` to demonstrate the prototypal relationship between `prot` and foo.
console.log(prot.isPrototypeOf(foo));





//4) What will the last two lines of the code below return? Why?
var prot = {};
var foo = Object.create(prot);
prot.isPrototypeOf(foo);                // true
Object.prototype.isPrototypeOf(foo);    // true























































