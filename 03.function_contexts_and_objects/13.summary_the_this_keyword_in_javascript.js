The four invocation types of JavaScript:

// function invocation        // example:  alert('Hello World!')
// method invocation          // exampe: console.log('Hello World!')
// constructor invocation:    // example: new RegExp('\\d')
// indirect invocation        // example: alert.call(undefined, 'Hello World!')

// A function invocation is when an expression that evaluates to a function object is followed by an open parenthesis. 

// Function invocation expressions cannot be a property accessor, ex. obj.myFunc(), which creates a method invocation. For example [1, 5].join(',') is not a function invocation, but a method call.

// In a function invocation the execution ocntext is the global object.

//  Method invocation is performed when an expression in aform of property accessor that evaluates to a function object is followed by an open parenthesis (, a comma separated list of arguments expressions and a close parenthesis ).

// In a method invocation, `this` is the object that owns the method.

