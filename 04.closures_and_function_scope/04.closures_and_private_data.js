// function makeCounter() {
//   var count = 0;
//   return function() {
//     count += 1;
//      console.log(count);
//   };
// }

// var counter = makeCounter();
// counter();
// counter();
// counter();

// var counter = makeCounter();

// // console.log(count);
// console.log(counter.count);



// function makeCounterLogger(startNum) {
//   return function(endNum) {
//     if (startNum > endNum) {
//       for (let i = startNum; i >= endNum; i -= 1) {
//         console.log(i);
//       }
//     } else if (startNum < endNum) {
//       for (let i = startNum; i <= endNum; i += 1) {
//         console.log(i);
//       }
//     }
//   };
// }

// var countlog = makeCounterLogger(5);
// countlog(8);
// // 5
// // 6
// // 7
// // 8
// console.log();
// countlog(2);
// // 5
// // 4
// // 3
// // 2







// 2) 
function makeList() {
  let list = [];
  return function(item) {
    if (item === undefined) {
      if (list.length > 0) {
        list.forEach(item => {
          console.log(item);
        });
      } else {
        console.log('The list is empty.');
      }
    } else if (list.includes(item)) {
      let idx = list.indexOf(item);
      list.splice(idx, 1);
      console.log(item + ' removed!');
    } else if (!list.includes(item)) {
      list.push(item);
      console.log(item + ' added!');
    }
  };
}



var list = makeList();
list();
// // The list is empty.
list('make breakfast');
// make breakfast added!
list('read book');
// // read book added!
list();
// // make breakfast
// // read book
list('make breakfast');
// // make breakfaset removed!
list();
// // read book








































