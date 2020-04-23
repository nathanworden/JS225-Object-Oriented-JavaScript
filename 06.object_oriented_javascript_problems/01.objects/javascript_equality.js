
// Deep equality which does not care about the insertion order of string keys:
function objectsEqual(a, b) {
  if (Object.keys(a).length !== Object.keys(b).length) return false;
  let keys = Object.keys(a);
  for (key of keys) {
    if (typeof a[key] === 'object') { 
      if (!objectsEqual(a[key], b[key])) return false;
    }
    if (a[key] !== b[key]) return false;
  }
  return true;
}

a = {daysInQuarantine: 40, cats: [2]};
b = {cats: [2], daysInQuarantine: 40};

console.log(objectsEqual(a, b));
// => true




// Deep Equality which checks the insertion order of string keys:
// function objectsEqual(a, b) {
//   if (a === b) return true;
//   if (Object.keys(a).length !== Object.keys(b).length) return false;

//   let aEntries = Object.entries(a);
//   let bEntries = Object.entries(b);

//   return aEntries.every((pair, idx) => {
//     if (typeof pair[1] === 'object') {
//       return deepEquality(pair[1], bEntries[idx][1]);
//     } else {
//       return pair[0] === bEntries[idx][0] && pair[1] === bEntries[idx][1];
//     }
//   });
// }

// let a = {daysInQuarantine: 40, cats: [2]};
// let b = {cats: [2], daysInQuarantine: 40};

// console.log(objectsEqual(a, b));
// => false











