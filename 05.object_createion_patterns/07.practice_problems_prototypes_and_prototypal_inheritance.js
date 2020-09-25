function getDefiningObject(object, propKey) {
  while (!object.hasOwnProperty(propKey)) {
    object = Object.getPrototypeOf(object);

    if (object === null) return null;
  }

  return object;
}

let foo = {
  a: 1,
  b: 2,
};

let bar = Object.create(foo);
let baz = Object.create(bar);
let qux = Object.create(baz);

bar.c = 3;

console.log(getDefiningObject(qux, 'c') === bar);     // => true
console.log(getDefiningObject(qux, 'e'));             // => null