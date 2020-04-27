// Solution 1: Preserve Context with a Local Variable in the Lexical Scope

var obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    var self = this;

    function bar() {
      console.log(self.a + ' ' + self.b);
    }

    bar();
  },
};

obj.foo();

// Solution 2: Pass the context to Internal Functions
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

// Solution 3: Bind the Context with a Function Expression
// You can use `bind` when you define the function to provide a permanent context to `bar`. Note taht you must call `bind` with a function expression, not a function declaration; a function declaration won't work.

var obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    var bar = function() {
      console.log(this.a + ' '+ this.b);
    }.bind(this);

    // some lines of code

    bar();

    // more lines of code

    bar();

    // ...
  }
};

obj.foo();

// One advantage of using ``bind` is that you can do it once and then call it as ofgen as you wan without explicitly providing a context.





















