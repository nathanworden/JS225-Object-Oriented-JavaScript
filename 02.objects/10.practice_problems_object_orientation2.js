function createProduct(id, name, stock, price) {
  return {
    id: id,
    name: name,
    stock: stock,
    price: price,
    setPrice: function() {
      if (newPrice <= 0) {
        console.log("The price is invalid because it is negative");
      } else {
        this.price = newPrice;
      }
    },
    describe: function() {
      console.log("Name: " + this.name);
      console.log("ID: " + this.id);
      console.log("Price: $" + this.price);
      console.log("Stock: " + this.stock);
    }
  }
}

let scissors = createProduct(0, 'Scissors', 8, 10);
console.log(scissors);
let drill = createProduct(1, 'Cordless Drill', 15, 45);
console.log(drill);


// let scissors = {
//   id: 0,
//   name: 'Scissors',
//   stock: 8,
//   price: 10,
//   describe: function() {
//     console.log("Name: " + this.name);
//     console.log("ID: " + this.id);
//     console.log("Price: $" + this.price);
//     console.log("Stock: " + this.stock);
//   },
//   setPrice: function(newPrice) {
//     if (newPrice <= 0) {
//       console.log("The price is invalid because it is negative");
//     } else {
//       this.price = newPrice;
//     }
//   },
// }

// let drill = {
//   id: 1,
//   name: 'Cordless Drill',
//   stock: 15,
//   price: 45,
//   describe: function() {
//     console.log("Name: " + this.name);
//     console.log("ID: " + this.id);
//     console.log("Price: $" + this.price);
//     console.log("Stock: " + this.stock);
//   },
//   setPrice: function(newPrice) {
//     if (newPrice <= 0) {
//       console.log("The price is invalid because it is negative");
//     } else {
//       this.price = newPrice;
//     }
//   }
// }

// function changePrice(item, newPrice) {
//   if (newPrice <= 0) {
//     console.log("The price is invalid because it is negative");
//   } else {
//     item.price = newPrice;
//   }
// }

// function describeProduct(product) {
//   console.log("Name: " + product.name);
//   console.log("ID: " + product.id);
//   console.log("Price: $" + product.price);
//   console.log("Stock: " + product.stock);
// }

// console.log(scissors);
// changePrice(scissors, 99);
// console.log(scissors);
// changePrice(scissors, -15);
// console.log(scissors);

// describeProduct(scissors);
