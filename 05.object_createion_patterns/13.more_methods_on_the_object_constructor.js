// Object.getPrototypeOf([]) === Array.prototype; // true

// function NewArray() {}
// NewArray.prototype = Object.create(Object.getPrototypeOf([]));

// //  The empty array is an object whose prototype object is the `Array.prototype` object. Then we create a function and use `Object.create` to have the `NewArray.prototype` object inherit from the `Array.prototype`.

// NewArray.prototype.first = function() {
//   return this[0];
// };

// // Next we add a method on `NewArray.prototype` can now delegate all the Array methods to `Array.prototype`, and it has the special ability to respond to `first` and return the first element in the array.

// var newArr = new NewArray();
// var oldArr = new Array();

// oldArr.push(5);
// newArr.push(5);
// oldArr.push(2);
// newArr.push(2);
// console.log(newArr.first());      // => 5
// console.log(oldArr.first);        // => undefined



//

// Object.defineProperties

// We want to have an object constructor that returns a new object with a log function that cannot be modified. In a normal constructur this is not possible. However, using `defineProperties` method on `Object we can provide properties and values and set whether each property can be changed or not. Here is an example of creating a property on an object that is read-only.

// var obj = {
//   name: 'Obj',
// };

// Object.defineProperties(obj, {
//   age: {
//     value: 30,
//     writable: false,
//   },
// });

// console.log(obj.age);   // => 30

// Using this method, create a function that constructs a new object with a `log` method that is read-obly. The log method will use console.log to output the `name` property on itself.


function newPerson(name) {
  let obj =  {
    name: name,
  };

  Object.defineProperties(obj, {
    log: {
      value: function() {
        console.log(this.name);
      },
      writable: false,
    }
  });

  return obj;
}

var me = newPerson('Shane Riley');
me.log();       // => Shane Riley
me.log = function() { console.log('Amanda Rose'); };
me.log();       // => Shane Riley







//
// Object.freeze
// If we wnated to have an object with proeprtie sthat are all immutatble, or not able to be changed, we can use the `Object.freeze` method to prevent anything from being changed about an object. This prevents any property values that are not objects from being changed or deleted.

var frozen = {
  integer: 4,
  string: 'String',
  array: [1, 2, 3],
  object: {
    foo: 'bar',
  },
  func: function() {
    console.log('I\'m frozen');
  },
};



























