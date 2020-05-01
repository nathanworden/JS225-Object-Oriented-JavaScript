// var studentId = 0;

// function generateStudentId() {
//   studentId += 1;
//   return studentId;
// }

// generateStudentId();

// console.log(studentId);


////////////////////////////////////////////////////////////

// var generateStudentId = (function() {
//   var studentId = 0;

//   return function() {
//     studentId += 1;
//     return studentId;
//   };
// })();

// console.log(generateStudentId());
// console.log(generateStudentId());
// console.log(generateStudentId());

////////////////////////////////////////////////////////////


// var inventory = {
//   stocks: [],
//   stockCounts: function() {
//     this.stocks.forEach(function(stock) {
//       console.log(stock.name + ': ' + String(stock.count));
//     });
//   },
//   addStock: function(newStock) {
//     var isValid = this.stocks.every(function(stock) {
//       return newStock.name !== stock.name;
//     });

//     if (isValid) { this.stocks.push(newStock) }
//   },
// };

////////////////////////////////////////////////////////////


var inventory = (function() {
  var stocks = [];
  function isValid(newStock) {
    return stocks.every(function(stock){
        return newStock.name !== stock.name;
      });
  }

  return {
    stockCounts: function() {
      stocks.forEach(function(stock) {
        console.log(stock.name + ': ' + String(stock.count));
      });
    },
    addStock: function(newStock) {
      if (isValid(newStock)) { stocks.push(newStock) }
    },
  };
})();




inventory.addStock({
  name: 'ballpen',
  count: 5,
});

inventory.addStock({
  name: 'ballpen',
  count: 5,
});

// error:
inventory.stocks.push({
  name: 'ballpen',
  count: 5,
});

// console.log(inventory);







































