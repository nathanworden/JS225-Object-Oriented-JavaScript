
// var scissors = {
//   id: 0,
//   name: 'Scissors',
//   stock: 8,
//   price: 45,
// };

// var drill = {
//   id: 1,
//   name: 'Cordless Drill',
//   stock: 15,
//   price: 45,
// };


// setPrice(scissors, 50);
// console.log(scissors);

function createProduct(id, name, stock, price) {
  return {
    id: id,
    name: name,
    stock: stock,
    price: price,
    setPrice: function(newPrice) {
      if (newPrice <= 0) {
      alert(`This isn't oil- ${this.name} can't be worth less than $0!`);
      } else {
        this.price = newPrice;
      }
    },
    describe: function() {
      console.log(`Name: ${this.name}`);
      console.log(`ID: ${this.id}`);
      console.log(`Price: $${this.price}`);
      console.log(`Stock: ${this.stock}`);
    },
  }
};

var scissors = createProduct(1, 'Scissors', 8, 10);
var cordlessDrill = createProduct(2, 'Cordless Drill', 15, 45);
var camera = createProduct(3, 'Camera', 2, 3000)

// scissors.describe();
// scissors.setPrice(100);
console.log(scissors);
console.log(cordlessDrill);
console.log(camera);