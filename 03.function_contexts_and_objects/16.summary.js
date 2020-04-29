var foo = function() {
  console.log(this.message);
};

var message = "D'oh!";

var ctx = {
  message: "Don't have a cow, man"
};

foo.bind(ctx);