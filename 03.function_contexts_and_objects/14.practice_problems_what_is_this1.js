var foo = {
  a: 1,
  bar: function() {
    console.log(this.baz());
  },

  baz: function() {
    return this;
  },
};

foo.bar();
var qux = foo.bar;
qux();

//  Uncaught TypeError: this.baz is not a function

// Line 14 calls `bar` as a functiuon in the global context, `window`; since `baz` doesn't exist in `window`, JavaScript raises an error.