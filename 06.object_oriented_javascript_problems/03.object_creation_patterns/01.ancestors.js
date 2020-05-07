// Object.prototype.ancestors = function() {
//   let output = [];
//   let current = this;
//   while (!current.hasOwnProperty('ancestors')) {
//     let proto =  Object.getPrototypeOf(current);
//     proto.hasOwnProperty('name') ? output.push(proto.name) : 'nothing';
//     current = proto;
//   }
//   output.push('Object.prototype');
//   console.log(output);
// }


Object.prototype.ancestors = function ancestors() {
  var ancestor = Object.getPrototypeOf(this);

  // console.log(Object.prototype.hasOwnProperty.call(ancestor, 'name'));
  if (Object.prototype.hasOwnProperty.call(ancestor, 'name')) {
    console.log(ancestor.ancestors());
    return [ancestor.name].concat(ancestor.ancestors());
  }

  return ['Object.prototype'];
}


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


// console.log(Object.getPrototypeOf(qux));
// console.log(qux.hasOwnProperty('name'));
// console.log(Object.getPrototypeOf(baz));
// console.log(Object.getPrototypeOf(bar));
// console.log(Object.getPrototypeOf(foo));