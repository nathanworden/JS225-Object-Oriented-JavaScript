var prot = {};

var foo = Object.create(prot);
console.log(Object.getPrototypeOf(foo) === prot);
console.log(prot.isPrototypeOf(foo));