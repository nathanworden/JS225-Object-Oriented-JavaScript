// function getDefiningObject(object, propKey) {
//   let owned = object.hasOwnProperty(propKey);
//   while (!owned) {
//     object = Object.getPrototypeOf(object);
//     if (object === null) {return null}
//     owned = object.hasOwnProperty(propKey);
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

// bar.c = 3;

// // console.log(getDefiningObject(qux, 'c'));     // => true


// console.log(getDefiningObject(qux, 'c') === bar);     // => true
// console.log(getDefiningObject(qux, 'e'));             // => null


// // Is the propKey on the current object?
// // If so, return that object
// // If not, look at the next object up on the prototypal chain.
// // Keep looking up to the next object until the propKey is found or the return is null.


// function shallowCopy(object) {
//   let obj = Object.create(Object.getPrototypeOf(object));

//   let properties = Object.getOwnPropertyNames(object);
//   console.log(properties);
//   properties.forEach(prop => {
//     obj[prop] = object[prop];
//   });

//   return obj;
// }

// // function shallowCopy(object) {
// //   var result = Object.create(Object.getPrototypeOf(object));
// //   var prop;

// //   for (prop in object) {
// //     if (Object.prototype.hasOwnProperty.call(object, prop)) {
// //       result[prop] = object[prop];
// //     }
// //   }

// //   return result;
// // }

// // var a = {
// //   hasOwnProperty: 1,
// // };

// // shallowCopy(a);

// var foo = {
//   a: 1,
//   b: 2,
//   // hasOwnProperty: 1,
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
// console.log(baz.hasOwnProperty('c'));  // true



function extend(destination) {
  let sourceObjects = [].slice.call(arguments, 1);
  let output = {};
  sourceObjects.forEach(obj => {
    let props = Object.getOwnPropertyNames(obj);
    props.forEach(prop => {
      output[prop] = obj[prop];
    })
  });

  return output;
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

// console.log(object);

console.log(object.b.x);          // => 1
object.sayHello();                // => Hello, Joe































































