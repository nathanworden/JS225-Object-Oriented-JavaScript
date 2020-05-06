// Good Parts


// - Lambda
// - Dynamic Objects
// - Loose Typing
// - Object Literals


// Inheritance
// - Inheritance is object-oriented code resued.
// - Two Schools:
    // - Classical
    // - Prototypal

// Protypal Inheritance
 // - Class free
 // - Objects inherit from objects.
 // - An object contains a link to another object: Delegation. Differential Inheritance.

 // var newObject = Object.create(oldObject);
 // newObject      -------> old Object
 // __proto__      -------> __________

 // Prototypal Inheritance
 // if (typeof Object.create !== 'function') {
 //  OBject.create = function (o) {
 //    function F() {}
 //    F.prototype = o;
 //    return new F ();
 //  };
 // }



 // new
 //  - The new operator which is required when calling a constructor function.
 // - If new is omitted, the global object is clobbered by the constructor.
 // - There is no complie-time or run-time warning.




// Global

var names = ['zero', 'one', 'two', 'three', 'four', 'five', 'siz', 'seven', 'eight', 'nine'];

var digit_name = function(n) {
  return names[n];
};

alert(digit_name(3));       // 'three'




// Slow

var digit_names = function(n) {
  var names = ['zero', 'one', 'two', 'three', 'four', 'five', 'siz', 'seven', 'eight', 'nine'];

  return names[n];
};

alert(digit_name(3));  //'three'



// Closure

var digit_name = function() {
  var names = ['zero', 'one', 'two', 'three', 'four', 'five', 'siz', 'seven', 'eight', 'nine'];

  return function(n) {
    return names[n];
  };
}();

alert(digit_name(3));     // 'three'



// A Module Pattern

var singleton = function() {
  var privateVariable;
  function privateFunction(x) {
    ...privateVariable...
  }

  return {
    firstMethod: function(a, b) {
      ...privateVariable...
    },
    secondMethod: function(c) {
      ...privateFunction()...
    }
  };
}();


// Module pattern is easily transformed into a powerful constructor pattern.

// Power Constructors
// 1.) Make an object.
        // - Object literal
        // - new
        // - Object.create
        // - call another power constructor

// 2) Deine some variables and functions.
      // These become private members

// 3) Augment the object with priviledged methods.

// 4) Return the object



// Step One 

function myPowerConstructor(x) {
  var that = otherMaker(x);
  var secret = f(x);
  that.priv = function () {
    ... secret x that ...
  };
  return that;
}





// Closure
 // -  A function object contains:
 // A function (name, parameters, body)
 // A reference to the enviornment in which it was created (context)
          // A very good thing


// Style Isn't Subjective

















































