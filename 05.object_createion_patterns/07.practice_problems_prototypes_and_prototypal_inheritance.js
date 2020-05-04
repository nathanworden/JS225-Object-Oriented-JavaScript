// Practice Problems: Prototypes and Prototypal Inheritance

// 1) Write a function that returns the object on a given object's prototype chain where a property is defined.

// function getDefiningObject(object, propKey) {
//   let properties = Object.getOwnPropertyNames(object);
//   // console.log(object);
//   if (properties.includes(propKey)) {
//     return object;
//   } else {
//     if (Object.getPrototypeOf(object) === null) {return null}
//     object = Object.getPrototypeOf(object);
//     return getDefiningObject(object, propKey);
//   }
// }

// Book answer:
// function getDefiningObject(object, propKey) {
//   while (object && !object.hasOwnProperty(propKey)) {
//     object = Object.getPrototypeOf(object);
//   }

//   return object;
// }

// var foo = {
//   a: 1,
//   b: 2,
// };

// var bar = Object.create(foo);
// var baz = Object.create(bar);
// var qux = Object.create(baz);

// Object.prototype.e = 'hello';

// bar.c = 3;

// // console.log(getDefiningObject(qux, 'c') === bar);
// console.log(getDefiningObject(qux, 'e'));



// 2) Write a function to provide a shallow copy of an object. The object that you copy should share the same prototype chain as the original object, and it should have the same own properties that return the same values or objects when accessed. Use the code below to verify your implementation:

// function shallowCopy(object) {
//   let result = Object.create(Object.getPrototypeOf(object));
//   for (prop in object) {
//     if (Object.prototype.hasOwnProperty.call(object, prop)) {
//       result[prop] = object[prop];
//     }
//   }
//   return result;
//   // result = Object.create(Object.getPrototypeOf(object));
//   // var prop;

//   // for (prop in object) {
//   //   if (object.hasOwnProperty(prop)) {
//   //     result[prop] = object[prop];
//   //   }
//   // }
//   // return result;
// }


// var foo = {
//   a: 1,
//   b: 2,
// };

// var bar = Object.create(foo);
// bar.c = 3;
// bar.say = function() {
//   console.log('c is ' + this.c);
// };

// var baz = shallowCopy(bar);
// console.log(baz.a);       // => 1
// baz.say();                // => c is 3
// console.log(baz.hasOwnProperty('a'));  // false
// console.log(baz.hasOwnProperty('b'));  // false
// console.log(baz.a); // 1
// console.log(Object.getPrototypeOf(bar) === foo);  // true
// console.log(Object.getPrototypeOf(baz) === foo);  // true

// var a = {
//   hasOwnProperty: 1,
// };

// shallowCopy(a);




// 3) Write a function that extends an object (destination object) with contents from multiple objects (source objects).

function extend(destination) {
  for (var i = 1; i < arguments.length; i += 1) {
    var source = arguments[i];
    let keys = Object.getOwnPropertyNames(source);
    // console.log(source);
    // console.log(keys);

    for (var prop in source) {
      if (Object.prototype.hasOwnProperty.call(source, prop)) {
        destination[prop] = source[prop];
      }
    }
  }
   // console.log(destination);
   return destination;
}

var foo = {
  a: 0,
  b: {
    x: 1,
    y: 2,
  },
};

var joe = {
  name: 'Joe'
};

var funcs = {
  sayHello: function() {
    console.log('Hello, ' + this.name);
  },

  sayGoodBye: function() {
    console.log('Goodbye, ' + this.name);
  },
};

var object = extend({}, foo, joe, funcs);

console.log(object.b.x);          // => 1
object.sayHello();                // => Hello, Joe
















































