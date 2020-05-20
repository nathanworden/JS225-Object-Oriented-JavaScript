// Method 1: Using the Object Returned by the Animal Constructor

// function Animal(type) {
//   this.type = type;
// }

// Animal.prototype.move = function() {
//   console.log('Animal is moving.');
// };

// var Dog = function() {};
// Dog.prototype = new Animal('land');

// Dog.prototype.say = function() {
//   console.log(this.name + ' says Woof!');
// };

// Dog.prototype.run = function() {
//   console.log(this.name + ' runs away.');
// };

// var fido = new Dog;
// console.log(fido.type);

// Method 2: Using the Object Created by Object.create(Animal.prototype);

// function Animal(type) {
//   this.type = type;
// }

// Animal.prototype.move = function() {
//   console.log('Animal is moving.');
// };

// var Dog = function() {};
// Dog.prototype = Object.create(Animal.prototype);

// Dog.prototype.say = function() {
//   console.log(this.name + ' says Woof!');
// };

// Dog.prototype.run = function() {
//   console.log(this.name + ' runs away.');
// };

// var fido = new Dog;
// console.log(fido.type);






////

// You may see this code in the wild:

// In the Wild
function Animal(type) {
  this.type = type;                 // values for this can be land, air, or water
}

Animal.prototype.move = function() {
  console.log('Animal is moving.');
};

var Dog = function() {};
Dog.prototype = Animal.prototype;

Dog.prototype.say = function() {
  console.log(this.name + ' says Woof!');
};

Dog.prototype.run = function() {
  console.log(this.name + ' runs away.');
};


// Assigning `Animal.prototype` to `Dog.prototype` does lead to inherited behavior with objects created from the `Dog` constructor. However, what isn't apparent is that additoinal behavior added to `Dog.prototype` also becomes available to objects created from the `Animal` constructor; which is often not what is expected and intended.

// This happens because `Dog.prototype` points to the exact same object that is assigned to `Animal.prototype`, as such, when you mutate `Dog.prototype`, the change is reflected in `Animal.prototype`















