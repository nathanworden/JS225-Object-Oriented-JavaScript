// Iterate through each key and value pair
// Compare the value at key1 in a to the value at key1 in b.
// If they value is an array, recursively check if the objects are the same.



function deepEquality(a, b) {
  if (a === b) return true;
  if (Object.keys(a).length !== Object.keys(b).length) return false;

  let keys = Object.keys(a);

  for (key of keys) {
    if (typeof a[key] === 'object') {
      if (!deepEquality(a[key], b[key])) return false;
    }
    if (a[key] !== b[key]) return false;
  }

  return true;
}

// Deep Equality which checks the insertion order of string keys:
function deepEquality(a, b) {
  if (a === b) return true;
  if (Object.keys(a).length !== Object.keys(b).length) return false;

  let aEntries = Object.entries(a);
  let bEntries = Object.entries(b);

  return aEntries.every((pair, idx) => {
    if (typeof pair[1] === 'object') {
      return deepEquality(pair[1], bEntries[idx][1]);
    } else {
      return pair[0] === bEntries[idx][0] && pair[1] === bEntries[idx][1];
    }
  });
}


let obj1 = {
  space: 100,
  time: "now",
  // purposeOfUniverse: undefined,
  // ify: null,
  dog: [1],
};

let obj2 = {
  time: "now",
  space: 100,
  // purposeOfUniverse: undefined,
  // ify: null,
  dog: [1],
};

console.log(deepEquality(obj1, obj2));

// let testObject = { a: 'foo', b: undefined };
// console.log(deepEquality({a: 'foo', b: 'foo', c: testObject, }, {a: 'foo', b: 'foo', c: testObject, })); // true
// console.log(deepEquality({a: 'foo', b: 'foo', c: testObject, }, {a: 'foo', b: 'foo', c: { a: 'foo', b: undefined }, })); // true
// console.log(deepEquality({a: 'foo', b: 'foo', c: testObject, }, {a: 'foo', b: 'foo', c: { a: 'foo', b: null }, })); // false
// console.log(deepEquality({a: 'foo', b: 'foo', c: testObject, }, {a: 'foo', b: 'foo', c: 'object', })); // false

// let obj2 = {
//   space: 100,
//   time: "now",
//   purposeOfUniverse: undefined,
//   ify: null,
//   dog: [1],
// };


// let obj3 = {
//   1: 2,
//   3: [4, 5, [6]]
// };

// let obj4 = {
//   1: 2,
//   3: [4, 5, [7]]
// };

// console.log(deepEquality(obj1, obj2)); // true
// console.log(deepEquality(obj3, obj4)); // false