# Study Guide for 225 Assessment Part 1

[toc]

## Objects

- Organizing code into appropriate objects

  - With objects we can organize data so the relationship between pieces of data is more clear.
  - The benefits of organizing code into objects becomes evident when an application uses more than one instance of a given Object type.
  - Object-Oriented programming is a pattern that uses objects as the basic building blocks of a program instead of local variables and functions.
  - The object-oriented approach to programming puts data and procedures that manipulate that data into containers, aka 'objects'.
  - We move complexity inside objects instead of exposing it globally.
  - When we must make changes, we can restrict those changes to particular objects; the changes don't ripple throughout the entire project.
  - Object:
    - Organize related data and code together.
    - Are useful when a program needs more than one instance of something. 
    - Become more useful as the code base size increases.
  - Object oriented programming is a pattern that uses objects to organize code instead of Functions. Objects can also contain data or state.
  - You can call the property of an object a `method` when the value you assign to it is a function.
  - When you invoke an object's methods, they can access the object to which they belong to by using `this`.

- Object factories

  - Object factories don't differ in a technical sense from functions in general, apart from the fact that they return new objects.

  - Example of an Object Factory:

  - ```javascript
    function makeRobot() {
      var robot = {};
      robot.speak = function() {
        console.log('Danger, Will Robinson!');
      };
    
      return robot;
    }
    ```

    - We cannot tell whether an object has been created by `makeRobot`.
    - Each object created by `makeRobot` has it's own copy of `speak`
    - Each object returned by `makeRobot` is a new object.
    - If we compare two objects created by `makeRobot` using the strict or non-strict equality operator, the comparison will return `false`.
    - https://launchschool.com/lessons/4671d66f/assignments/6463ca43

## Determining/setting function execution context (`this`)

Every time a JavaScript function is invoked, it has access to an object called the **execution context** of that function. This execution context is accessible through the keyword `this`. A JavaScript function can be invoked in a variety of ways. Which object `this` refers to depends on how the function was invoked.

Note: Anywhere outside a function, the keyword `this` is bound to the global object. If the `this` keyword is used inside a function, then its value depends on how the function was invoked.

#### Implicit function execution context

- The implicit *function* execution context is the context for a function that you invoke without supplying an explicit context. JavaScript binds such functions to the global object.

```javascript
function foo() {
  return 'this here is: ' + this;
}

foo();					// "this here is: [object Window]"
```

- Binding a function to a context object occurs when you execute the function, not when you define it. Example:

  ```javascript
  var object = {
    foo: function() {
      return 'this here is: ' + this;
    },
  };
  
  object.foo() 		// 'this here is: [object Object]'
  
  var bar = object.foo;
  bar();					// 'this here is: [object Window]'
  ```

- The implicit *function* execution context is the global object.

- The implicit *method* execution context is the  the owning or calling object:

```javascript
var foo = {
  bar: function() {
    return this;
  },
};

foo.bar() === foo; // true
```

- It's importnat to reiterate that implicit execution context is bound upon invocation, not definition. Consider this example:

```javascript
var foo = {
  bar: function() {
    return this;
  },
};

var baz = foo.bar;

baz() === foo; 		// false
baz() === window; // true
```

Although bar begins its life as an object property in the example above, when it is invoked as a function (as it is after being assigned to baz) its context is bound to the global object.

#### Explicit function execution context

- JavaScript lets us use the `call` and `apply` methods to change a function's execution context at execution time. That is, we can explicitly bind a function's exuction context to an object when we execute the function.
- The `call` method can pass arguments to the function. List the arguments one by one after the context object. The `apply`method is identical to `call`, except that it uses an array to pass arguments.
- The `bind` method lets us bind a function to a context object permanently. Unlike `call` or `apply`, `bind` doesn't execute a function. Instead it  creates and returns a new Function, and permanently binds it to a given object. Since the binding is permanent, we can pass the function around without concern that its context will change; it won't.

#### Dealing with context loss

- **Method Losing Context when Taken Out of Object** - If you remove a method from its containing object and execute it, it loses its context:

```javascript
var john = {
  firstName: 'John',
  lastName: 'Doe',
  greetings: function() {
    console.log('hello, ' + this.firstName + ' ' + this.lastName);
  },
};

var foo = john.greetings;
foo();

// => hello, undefined undefined
```

You could use `foo.call(John)` to restore the context, but what happens if you don't want to execute the function right away, or you need to pass it to another function? By the time you're ready to call `foo`, `john` may be out of scope.

```javascript
function repeatThreeTimes(func) {
  func();       // can't do func.call(john), out of scope
  func();
  func();
}

function foo() {
  var john = {
    firstName: 'John',
    lastName: 'Doe',
    greetings: function() {
      console.log('hello, ' + this.firstName + ' ' + this.lastName);
    },
  };

  repeatThreeTimes(john.greetings); //
}

foo();

// => hello, undefined undefined
// => hello, undefined undefined
// => hello, undefined undefined
```

You can also update the receiving function (`repeatThreeTimes`) by adding an extra parameter to the function and pass in the desired context:

```javascript
function repeatThreeTimes(func, context) {
  func.call(context);
  func.call(context);
  func.call(context);
}

function foo() {
  var john = {
    firstName: 'John',
    lastName: 'Doe',
    greetings: function() {
      console.log('hello, ' + this.firstName + ' ' + this.lastName);
    },
  };

  repeatThreeTimes(john.greetings, john);
}

foo();

// hello, John Doe
// hello, John Doe
// hello, John Doe
```

You see this kind of code often with JavaScript's built-in methods, such as `Array.prototype.forEach`. These methods let you specify an optional `thisArg` argument as the context object (value of `this`)that the function should use.

What happens, though, if you can't update the function or can't supply a context object? Then you need a different approach. **Hard binding** with `bind` often works:

```javascript
function repeatThreeTimes(func) {
  func();
  func();
  func();
}

function foo() {
  var john = {
    firstName: 'John',
    lastName: 'Doe',
    greetings: function() {
      console.log('hello, ' + this.firstName + ' ' + this.lastName);
    },
  };

  repeatThreeTimes(john.greetings.bind(john));
}

foo();

// => hello, John Doe
// => hello, John Doe
// => hello, John Doe
```

- **Internal Function Losing Method Context**

Examine this code:

```javascript
var obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    function bar() {
      console.log(this.a + ' ' + this.b);
    }

    bar();
  },
};

obj.foo();        // => undefined undefined
```

Your instincts may tell you that this code will log `"Hello world"` to the console. Your instincts are wrong here. Even though `foo` executes within the `obj` context, the call to `bar` on line 9 does not provide an explicit context, which means that JavaScript binds the global object to the function. As a result, `this` on line 6 is the global object, not `obj`.

This trap is insidious and well-known. Most developers consider it to be a mistake in the language design. If we provide the context to call `foo`, then the context *should* propagate to its internal functions. It doesn't, though, and it's hard to imagin how binding the function to the global object is ever useful.

Solutions to this problem:

**Solution 1: Preserve Context with a Local Variable in the Lexical Scope.**

One common approace is the `var self = this` or `var that = this` fix. You save `this` in a variable named `self` or `that` before calling the function, then reference the variable in the function.

```javascript
var obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    var self = this;

    function bar() {
      console.log(self.a + ' ' + self.b);
    }

    bar();
  }
};

obj.foo();
>hello world
```

Here we assign `this` to a local variable `self` on line 5. Based on its lexical scope, `bar` has access to `self`, so it can freely use `self` instead of `this` to access the proper context object.

**Solution 2: Pass the Context to Internal Functions**

You can also pass the context object to the function with `call` or `apply`, as seen here on line 9:

```javascript
var obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    function bar() {
      console.log(this.a + ' ' + this.b);
    }

    bar.call(this);
  }
};

obj.foo();
>hello world
```

**Solution 3: Bind the Context with a Function Expression**

You can use `bind` when you define the function to provide a permanent context to `bar`. Note that you must call `bind` with a function expression, not a function declaration; a function declaration won't work.

```javascript
var obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    var bar = function() {
      console.log(this.a + ' ' + this.b);
    }.bind(this);

    // some lines of code

    bar();

    // more lines of code

    bar();

    // ...
  }
};

obj.foo();
>hello world
>hello world
```

One advantage of using `bind` is that you can do it once and then call it as often as you want without explicitly providing a context.

**Function as Argument Losing Surrounding Context**

Examine this code:

```javascript
function repeatThreeTimes(func) {
  func();
  func();
  func();
}

var john = {
  firstName: 'John',
  lastName: 'Doe',
  greetings: function() {
    repeatThreeTimes(function() {
      console.log('hello, ' + this.firstName + ' ' + this.lastName);
    });
  },
};

john.greetings();

// => hello, undefined undefined
// => hello, undefined undefined
// => hello, undefined undefined
```

In this example, we call `repeatThreeTimes` with a function argument that contains `this`. `repeatThreeTimes` calls its argument three times, but each time it does so without an explicit context. As we've learned, this means the context is the global object. Thus, `this` inside the function is the global object, not `john`.

If you think that this problem happens infrequently, consider this code:

```javascript
var obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    [1, 2, 3].forEach(function(number) {
      console.log(String(number) + ' ' + this.a + ' ' + this.b);
    });
  },
};

obj.foo();

// => 1 undefined undefined
// => 2 undefined undefined
// => 3 undefined undefined
```

It looks simple enough; the code loops over an array and logs some information to the console. The problem, though, is that `forEach` executes the anonymous function passed to it, so it gets executed with the global object as context. Once again, `this` has the wrong value, and the funcion doesn't do what we want.

The problem is easy to fix. You can use the same solutions we used to solve the problem in the previous assingnment.

##### Use a local variable in the lexical scope to store `this`

```javascript
var obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    var self = this;
    [1, 2, 3].forEach(function(number) {
      console.log(String(number) + ' ' + self.a + ' ' + self.b);
    });
  },
};

obj.foo();

// => 1 hello world
// => 2 hello world
// => 3 hello world
```

##### Bind the argument function with the surrounding context

```javascript
var obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    [1, 2, 3].forEach(function(number) {
      console.log(String(number) + ' ' + this.a + ' ' + this.b);
    }.bind(this));
  },
};

obj.foo();

// => 1 hello world
// => 2 hello world
// => 3 hello world
```

##### Use the optional thisArg argument

Some methods that take function arguments allow an optional argument that defines the context to use when executing the function. `Array.prototype.forEach`, for instance, has an optional `thisArg` argument for the context. This argument makes it easy to work around this context loss problem.

```javascript
var obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    [1, 2, 3].forEach(function(number) {
      console.log(String(number) + ' ' + this.a + ' ' + this.b);
    }, this);
  },
};

obj.foo();

// => 1 hello world
// => 2 hello world
// => 3 hello world
```

`Array.prototype.map`, `Array.prototype.every`, and `Array.prototype.some` also take an optional `thisArg` argument.

##### Summary

- Function invocations (e.g. `parseInt(numberString)`)rely upon implicit execution context that resolves to the global object. Method invocations (e.g, `array.forEach(processElement)`) rely upon implicit context that resolves to the object that holds the method.

- All JavaScript code executes within a context. The top level context in a web browser is the `window` object. All global methods and Objects (such as `isNaN` or `Math`) are properties of this object.
- You can't use `delete` to delete variables and functions declared at the global scope.
- `this` is the current execution context of a function.
- The value of `this` changes based on **how you invoke a function**, not **how you define it**.
- JavaScript has **first-class functions** which have the following characteristics:
  - You can add them to objects and execute them in the respective object's contexts.
  - You can remove them from their objects, pass them around, and execute them in entirely different contexts.
  - They're initally unbound, but dynamically bound to a context object at execution time.
- `call` and `apply` invoke a function with an explicit execution context.
- `bind` permanently binds a function to a context and returns a new function
- Method invocations can operate on the data of the owning object.

## Scope and Closures

#### Creating and using private data

- Closures let a function access any variable that was in scope when the function was defined.
- You can use closures to make variables "private" to a function, or set of functions, and inaccessible elsewhere.
- Closures allow functions to "carry around" values for later use.
- Functions close over or enclose the context at their definition point, so we call them closures. They always have access to that context, regardless of when and where the program invokes the function. Here's some code that uses a closure to increment and log a number with each call:

```javascript
function makeCounter() {
  var count = 0;       // declare a new variable
  return function() {
    count += 1;        // references count from the outer scope
    console.log(count);
  };
}
```

Since `makeCounter` returns a function, we use it like this:

```javascript
var counter = makeCounter();
counter();
=> 1
counter();
=> 2
counter();
=> 3
```



![function_scope1](https://d3905n0khyu9wc.cloudfront.net/images/function_scope1.png)

Note that `count` is privvate data for the function returned by `makeCounter`. The closure makes it impossible to access the value of `count` from outside itself:

```javascript
var counter = makeCounter();

console.log(count);
// ReferenceError: count is not defined
console.log(counter.count);
// undefined: Declarations inside closures aren't accessible from outside
```

On the other hand, as we saw above, the function returned by `makeCounter` can freely access and update `counter`.

GIven the following code:

```javascript
function startup() {
  var status = 'ready';
  return function() {
    console.log('The system is ready.');
  };
}

var ready = startup();
var systemStatus = // ?
```

How can you set thevalue of `systemStatus` to the value of the inner variable `status` without changing `startup` in any way? Answer: You can't do this. **There is no way to access the value of the variable from outside the function** `status` is only available to the closure formed by the anonymous function returned by `startup`.

##### Why use closures to make data private?

- Using closures to restrict data access is a good way to force other developers to use the intended interface. By keeping the collection of items private, we enforece access via the provided methods.
- Helps protect data integrity since developers must use the defined interface.
- These benefits have a cost. Making data private can make it harder to extend the code. You would need to update the original definition instead of being able to add a method after the fact.

#### Garbage collection

- Values that are no longer accessible from anywhere in the code are eligible for **garbage collection** which frees up the memory that they used for reuse by other parts of the program.
- In JavaScript, values are allocated memory when it is created and, it is eventually, "automatically" freed up when it is not in use. This process of "automatically" freeing memory up is called **garbage collection**. As developers, we don't often have to worry about managing memory, though we sometimes need to concern ourserlves with how much memory we use.
- When there are no variables, objects, or closures that maintain a reference to the object or value, JavaScript marks the memory as eligible for Garbage Collection. As long as the object or value remains accessible, JavaScript can't and won't garbage collect it.
- You may sometime shear it said that garbage collection occurs when a variable goes out of scope. That's wrong; a variable can go out of scope but references to the object or value that it references may still exist elsewhere. Of course, if the variable is the sole remaining reference to the object or value, then it does become eligible for garbage collection.
- When you create a closure, it stores a reference to all variables it can access. Each of those variables references an object or primitive value. Theoretically, as long as the closure exists, those variables remain in existence, which means that the objects or values they reference must also endure. For this reason, JavaScript can't garbage collect any objects or values referenced by the variables that the closure keeps in its context.
- https://launchschool.com/lessons/0b371359/assignments/48d2a179
- Consider the code below. Are either of the values `1` or `"A string"` eligible for garbage collection on line 5? What about on line 10?

```javascript
var myNum = 1;

function foo() {
  var myStr = 'A string';
  // what is eligible for GC here?
}

foo();

// what is eligible for GC here?

// more code
```

​		 - Answer: Neither value is eligible for garbage collection on line 5, while `"A string"` is eligible for garbalge collection on line 10. In the context of this code snippet, the only references to these values are provided by the variables `myNum` and `myStr`. Since `myNum` is a global variable, its reference to `1` persists at every point in the code after assignment, but since `myStr` is function scoped, the variable's reference to `"A string"` is broken after the function execution is complete.

#### IIFEs

- An immediatley invoked function expression (IIFE) is a function that we define and invoke simultaneously. It looks like this;

```javascript
(function() {
  console.log('hello');
})();												// => hello
```

This syntax adds a pair of parentheses around the function expression, and the parentheses at the end invoke the function. The extra parentheses around the function expression are important- without them, we can't imvoke the function right away:

```javascript
function() {
  console.log('hello');
}();											// SyntaxError: Unexpected token
```

- With IIFEs, we use the parentheses to make it explicit that we want to parse the function definition as an expression. As an expression it means that there is a value returned- the function- that we can immediatley "invoke".
- All functions, including IIFEs, can take arguments and return values:

```javascript
(function(a) {
  return a + 1;
})(2);						// 3
```

- We can omit the parentheses around an IIFE when the function definition is an expressino that doesn't occur at the beginning of a line.

```javascript
var foo = function() {
  return function() {
    return 10;
  }();
}();

console.log(foo);				// => 10
```

##### Creating a Private Scope with an IIFE

- Imagine that you need to add some code to a large and messy JavaScript program. What problems might you run into? Answer: Your new variables and functions might already exist in the global scope. You would alter existing variables of the same name and overright functions of the same name. What can you do? Use an IIFE. The IFFE provides a private scope for your variables and won't clash with any other functions. We can also pass values into the IIFE as arguments during invocation:

```javascript
// thousands of lines of messy JavaScript code!

(function(number) {
  for (var i = 0; i < number; i += 1) {
    console.log(i);
  }
})(100);

// more messy JavaScript code
```

##### Creating Private Data with an IIFE

###### Using an IIFE to Return a Function with Access to Private Data

- As we have seen earlier, we can create private data with the use of closures. We could extend this concept and use it with an IIFE. With an IIFE we can make functions and objects that have access to private data.

```javascript
var generateStudentId = (function() {
  var studentID = 0;
  
  return function() {
    studentId += 1;
    return studentId;
  };
})();
```

###### Using an IIFE to Return an Object with Access to Private Data

```javascript
var inventory = (function() {
  var stocks = [];
  function isValid(newStock) {
    return stocks.every(function(stock) {
      return newStock.name !== stock.name;
    }); 
  }																					// everything above this is private

  return { 
    stockCounts: function() {
      stocks.forEach(function(stock) {
        console.log(stock.name + ': ' + String(stock.count));
      });
    },
    addStock: function(newStock) {
      if (isValid(newStock)) { stocks.push(newStock) }
    },
  };
})();
```



#### Partial Function Application

- Partial function application is when the original function already has some of its arguments defined. In effect, the program partially applies them ahead of time. Since you already have their values, you don't need to provide them when you invoke the function.

```javascript
function later(func, argument) {
  return function() {
    func(argument);
  };
}

var logWarning = later(console.log, 'The system is shutting down!');
logWarning();
//=> The system is shutting down!
```

Here, `later` partially applies functions that take a single argument. You can use partial application with functions that take any number of arguments; you can provide some arguments ahead of time, and provide the others when you invoke the returned function.

- Partical function application uses a function (we'll call it the *generator*)that creates a new function (the *applicator*) to call a third function (the *primary*)that the generator receives as an argument. The generator receives some of the primary's arguments, while the applicator receives the rest when it gets invoked. The applicator then calls the primary and passes it all its arguments, both those passed to the generator and those passed to the applicator.

```javascript
function primaryFunction(arg1, arg2) {
  console.log(arg1);
  console.log(arg2);
}

function generatorFunction(primary, arg1) {
  return function(arg2) { // applicator
  return primary(arg1, arg2);
  }
}

var applicatorFunciton = generatorFunction(primaryFunciton, 'Hello');
applicatorFunction(37.2); // Performs primaryFunction('Hello', 37.2);
// => Hello
// => 37.2
```

## Object creation patterns

#### Constructor functions

A constructor function:

```javascript
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName || '';
  this.fullName = function() {
    return (this.firstName + ' ' + this.lastName).trim();
  };
}

var john = new Person('John', 'Doe');
var jane = new Person('Jane');

john.fullName();				// "John Doe"
jane.fullName();				// "Jane"

john.constructor;				// function Person(..)
jane.constructor				// function Person(..)

john instanceof Person;	// true
jane instanceof Person; // true
```

In this example, the `Person` function is a constructor function that we use to create objects. The reason that we say it's a constructor function is that **it's intended to be called with the `new` operator**; otherwise, it's just a regular JavaScript function. The fact that we capitalize the function's name is not a syntactical requirement, but a convention to reveal the intention that we should only use the function to construct objects.

If we call a function without the `new` operator, the `this` in the function points to the global object, and we've defined properties and functions on the global object itself!

```javaScript
Person('John', 'Doe');
window.fullName(); 				// "John Doe"
```

When we call a function with the `new` operator, the following happens:

1. A new object is created.
2. `this` in the function is set to point to the new object.
3. The code in the function is executed.
4. `this` is returned if the constructor doesn't explicitly return an object.

#### Prototype objects

Every JavaScript Object has a special property, `__proto__`, that points to another object. When we use the `Object.create` method to create an object, it sets the `__proto__` property of the created object to the object passed in:

```javascript
var foo = {
  a: 1,
  b: 2,
};

var bar = Object.create(foo);
bar.__proto__ === foo;					// true
```

In this case, we sat that the object assigned to `foo` is the **prototype object** of the object returned by ``Object.create` and assigned to `bar`. We could also say that we created the object `bar` with object `foo` as it's prototype.

Use 

- ` Object.getPrototypeOf(obj)` to get the prototype object of `obj`
- `Obj.isPrototypeOf(foo)` to check if `obj` is a prototype object of `foo`.

```javascript
var foo = {
  a: 1,
  b: 2,
};

var bar = Object.create(foo);
Object.getPrototypeOf(bar) === foo;			// true
foo.isPrototypeOf(bar);									// true
```

##### Prototype Chain and the Object.prototype Object

We can use `Object.create` to create objects that form a prototype chain:

```javascript
var foo = {
  a: 1,
  b: 2,
};

var bar = Object.create(foo);
var baz = Object.create(bar);
var qux = Object.create(baz);

Object.getPrototypeOf(qux) === baz; 		// true
Object.getPrototypeOf(baz) === bar;			// true
Object.getPrototypeof(bar) === foo;			// true

foo.isPrototypeOf(qux);									// true - because foo is on qux's prototype chain
```

The `Object.prototype` object is at the end of the prototype chain for all JavaScript objects. If you don't create an object from a prototype, its prototpe is the `Object.prototpe` object:

```javascript
var foo = {
  a: 1,
  b: 2,
};						// created with object literal

Object.getPrototypeOf(foo) === Object.prototype;				// true
```



#### Behavior delegation

##### Prototype Chain Lookup for Property Access

When we try to access a property or a method on an object, JavaScript searches not only in the object itself, but all the objects on its prototype chain, until the end is reached. Let us look at a simple example:

```javascript
var foo = {
  a: 1,
  b: 2,
};

var bar = Object.create(foo);
var baz = Object.create(bar);

bar.a;		// 1
baz.a;		// 1
baz.c;		// undefined
```

Let us start with `baz.a`. FIrst, JavaScript searches the `baz` object. After not finding the `a` property on the `baz` object, it then searches the `bar` object. Finally, it searches the `foo` object and finds the property there. For `baz.c`, since the property is not defined anywhere on `baz`'s prototpye chain, `undefined` is returned.

Let's look at another example:

```javascript
var foo = {
  hello: function() {
    return 'hello ' + this.name;
  },
};

var bar = Object.create(foo);
bar.name = 'world';
bar.hello();					// returns hello world
```

In this case, the `hello` method is found on the `bar` object's prototype object, then called with the context of the `bar` object itself.

##### Prototypal Inheritance and Behavior Delegation

Javascript's prototype chain lookup for properties gives us the ability to store an object's data and behaviors not just in the object itself, but anywhere on its prototype chain. This is very powerful when we want to share data or behaviors:

```javascript
var dog = {
  say: function() {
    console.log(this.name + ' says Woof!');
  },
  
  run: function() {
    console.log(this.name + ' runs away.');
  },
};

var fido = Object.create(dog);
fido.name = 'Fido';
fido.say();						// Fido says Woof!
fido.run();						// Fido runs away.

var spot = Object.create(dog);
spot.name = 'Spot';
spot.say();						// Spot says Woof!
spot.run();						// Spot runs away.
```

We may have thousands (or more!) of dogs in our program, but instead of defining the `say` and `run` methods on every object, we defined those methods on `dog`, the prototype object of all dogs. This gives us several advantages:

- We can create dogs much more easily with the `dog` prototype, and don't have to duplicate `say` and `run` on every single dog object.
- If we need to add/remove/update behavior to apply to all dogs, we can just modify the prototype object, and all dogs will pick up the changed behavior automatically.

##### Overriding Default Behavior

Objects created from prototypes can override shared behaviors by defining the same methods locally:

```javascript
var dog = {
  say: function() {
    console.log(this.name + ' says Woof!');
  },
};

var fido = Object.create(dog);
fido.name = 'Fido';
fido.say = function() {
  console.log(this.name + ' says Woof Woof!');
};

fido.say();             // => Fido says Woof Woof!
var spot = Object.create(dog);
spot.name = 'Spot';
spot.say();             // => Spot says Woof!
```

The `say` method is overridden locally on the `fido` object, but it doesn't impact any other objects created from the prototype.

##### Object.getOwnPropertyNames and object.hasOwnProperty

With behavior delegation, using `obj.prop !== undefined` is no longer a reliable way to test if a property is defined on an object — that expression returns true as long as `prop` is defined anywhere on the object's prototype chain. JavaScript gives you the following two methods to check an object's own property:

- The `hasOwnProperty` method on an object tests if a property is defined on the object itself.
- The `Object.getOwnPropertyNames` method returns an array of an object's own property names.

```javascript
var foo = {
  a: 1,
};

var bar = Object.create(foo);
bar.a = 1;
bar.b = 2;
bar.hasOwnProperty('a');            // true
Object.getOwnPropertyNames(bar);    // ["a", "b"]

delete bar.a;
bar.hasOwnProperty('a');            // false
Object.getOwnPropertyNames(bar);    // ["b"]

bar.hasOwnProperty('c');            // false
```

##### Methods on Object.prototpye

The `Object.prototype` object is on the top of all JavaScript objects' prototype chain, therefore the methods defined there can be called from any JavaScript object. Here are 3 useful ones:

- `Object.prototype.toString()`: returns a string representation of the object
- `Object.prototype.isPrototypeOf(obj)`: tests if the object is in another object's prototype chain
- `Object.prototype.hasOwnProperty(prop)`: tests whether the property is defined on the object itself

#### OLOO and Pseudo-Classical patterns

## The Pseudo-classical Pattern

The Pseudo-classical pattern is a combination of the constructor pattern and the prototype pattern. With this pattern, we use a constructor to set object states, and put shared methods on the constructor function's prototype:

```javascript
var Point = function(x, y) {            // capitalized constructor name as a convention
  this.x = x || 0;                      // initialize states with arguments
  this.y = y || 0;                      // 0 as default value
};

Point.prototype.onXAxis = function() {  // shared behaviors added to constructor's prototype property
  return this.y === 0;
};

Point.prototype.onYAxis = function() {  // these methods are added one by one
  return this.x === 0;
};

Point.prototype.distanceToOrigin = function() {
  return Math.sqrt((this.x * this.x) + (this.y * this.y));
};

var pointA = new Point(30, 40);         // use new to create objects
var pointB = new Point(20);

pointA instanceof Point;                // use instanceof to check type
pointB instanceof Point;

pointA.distanceToOrigin();              // 50
pointB.onXAxis();                       // true
```

For additional examples, you can check out this article on [inheritance on MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance). It has an example that shows how to create constructors that inherit features from "parent" classes. You can stop reading when you reach the ECMAScript 2015 Classes section.

## The OLOO Pattern

OLOO which stands for "Object Linking to Other Objects," was first popularized by Kyle Simpson. JavaScript sheds its pretense as a "class oriented" language, where it uses constructor functions as fake classes. Instead, it embraces its prototype based object model. With the OLOO pattern, we define the shared behaviors on a prototype object, then use `Object.create` to create objects that delegate directly from that object, without going through the roundabout way that involves "constructors and their prototype properties."

```javascript
var Point = {                       // capitalized name for the prototype as a convention
  x: 0,                             // default value defined on the prototype
  y: 0,

  onXAxis: function() {             // shared methods defined on the prototype
    return this.y === 0;
  },

  onYAxis: function() {
    return this.x === 0;
  },

  distanceToOrigin: function() {
    return Math.sqrt((this.x * this.x) + (this.y * this.y));
  },

  init: function(x, y) {            // optional init method to set states
    this.x = x;
    this.y = y;
    return this;
  },
};

var pointA = Object.create(Point).init(30, 40);
var pointB = Object.create(Point);

Point.isPrototypeOf(pointA);        // use isPrototypeOf to check type
Point.isPrototypeOf(pointB);

pointA.distanceToOrigin();          // 50
pointB.onXAxis();                   // true
```