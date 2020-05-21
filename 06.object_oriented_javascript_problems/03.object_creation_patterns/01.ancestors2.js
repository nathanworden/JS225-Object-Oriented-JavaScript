Object.prototype.ancestors = function() {
  let result = [];
  let obj = this;
  while (Object.getPrototypeOf(obj)) {
    if (Object.getPrototypeOf(obj) !== Object.prototype) {
      result.push(Object.getPrototypeOf(obj).name);
    }
    obj = Object.getPrototypeOf(obj);
  }

  result.push('Object.prototype');
  return result;
}

Object.prototype.ancestors = function ancestors() {
  var ancestor = Object.getPrototypeOf(this);

  if (Object.prototype.hasOwnProperty.call(ancestor, 'name')) {
    return [ancestor.name].concat(ancestor.ancestors());
  }

  return ['Object.prototype'];
};

// name property added to make objects easier to identify
var foo = {name: 'foo'};
var bar = Object.create(foo);
bar.name = 'bar';
var baz = Object.create(bar);
baz.name = 'baz';
var qux = Object.create(baz);
qux.name = 'qux';

console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
// console.log(baz.ancestors());  // returns ['bar', 'foo', 'Object.prototype']
// console.log(bar.ancestors());  // returns ['foo', 'Object.prototype']
// console.log(foo.ancestors());  // returns ['Object.prototype']