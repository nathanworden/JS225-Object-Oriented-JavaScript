// function objectsEqual(obj1, obj2) {
//   let entries1 = Object.entries(obj1);
//   let entries2 = Object.entries(obj2);

//   for (let i = 0; i < entries1.length; i += 1) {
//     let subArr1 = entries1[i];
//     let subArr2 = entries2[i];
//     if (subArr2 === undefined || subArr1.length !== subArr2.length) {return false}
//     for (let j = 0; j < subArr1.length; j += 1) {
//       if (subArr1[j] !== subArr2[j]) {
//         return false;
//       }
//     }
//   }

//   return true;
// }

// Deep Equality Check via Holden Hinkle:
// function objectsEqual(object1, object2) {
//   function bMatchesA(a, b) {
//     let keys = Object.keys(a);

//     for (let i = 0; i < keys.length; i += 1) {
//       if (typeof (a[keys[i]]) === 'object') {
//         if (!objectsEqual(a[keys[i]], b[keys[i]])) return false;
//       } else {
//         if (a[keys[i]] !== b[keys[i]]) return false;
//       }
//     }

//     return true;
//   }

//   if (object1 === object2) return true;

//   if ((Object.keys(object1).length !== Object.keys(object2).length) ||
//       (!bMatchesA(object1, object2)) ||
//       (!bMatchesA(object2, object1))) return false;

//   return true;
// }


function objectsEqual(object1, object2) {
  function bMatchesA(a, b) {
    let keys = Object.keys(a);

    for (let key of keys) {
      if (typeof (a[key]) === 'object') {
        if (!objectsEqual(a[key], b[key])) return false;
      } else {
        if (a[key] !== b[key]) return false;
      }
    }

    return true;
  }

  if (object1 === object2) return true;

  if ((Object.keys(object1).length !== Object.keys(object2).length) ||
      (!bMatchesA(object1, object2)) ||
      (!bMatchesA(object2, object1))) return false;

  return true;
}


// Book Answer: (Shallow Equality Check):


// function objectsEqual(a, b) {
//   if (a === b) {
//     return true;
//   }

//   return (keysMatch(a, b) && valuesMatch(a, b));
// }

// function keysMatch(a, b) {
//   var aKeys = Object.getOwnPropertyNames(a).sort();
//   var bKeys = Object.getOwnPropertyNames(b).sort();

//   if (aKeys.length !== bKeys.length) {
//     return false;
//   }

//   return aKeys.every(function(key, index) {
//     return key === bKeys[index];
//   });
// }

// function valuesMatch(a, b) {
//   var aKeys = Object.getOwnPropertyNames(a).sort();
//   var keys;

//   return aKeys.every(function(key) {
//     return a[key] === b[key];
//   });
// }


// Playing around
let obj1 = {
  space: 100,
  time: "now",
}

let obj2 = {
  time: "now",
  space: 100,
}

let obj3 = {
  1: 2,
  3: [4, 5, [6]]
};

let obj4 = {
  1: 2,
  3: [4, 5, [7]]
};

// console.log(Object.getOwnPropertyNames(obj));
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));
// console.log(obj.hasOwnProperty('space'));
console.log(objectsEqual(obj1, obj2));  // true
console.log(objectsEqual(obj3, obj4));  // false



// console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
// console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
// console.log(objectsEqual({}, {}));                                      // true
// console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false










