
//  Constructors, Prototypes, and the Prototype Chain

// Right now, the prototype chain is only 2 levels deep:
// Dog.prototype --> Object.prototype

// We will add to the prototype chain by creating an `Animal` constructor and having its prototype object come in between `Dog.prototype` and `Object.prototype`

// Dog.prototype --> Animal.prototype --> Object.prototype

// By extending it this way, we're saying the objects created from the `Dog` constructor will "inherit" behaviors rom `Animal.prototype`. For instance, given this code for the `Animal` and `Dog` constructors, all objects created from the `Dog` constructor will have the `move` behavior available once we establish the prototype chain.

function Animal(type) {
  this.type = type;         
};

Animal.prototype.move = function() {
  console.log('Animal is moving.')
};

var Dog = function() {};
Dog.prototype = new Animal('land');

Dog.prototype.say = function() {
  console.log(this.name + ' says Woof!');
};

Dog.prototype.run = function() {
  console.log(this.name + ' runs away.');
};

var fido = new Dog();
fido.move();             // => Animal is moving.

// This approach uses the object that the `Animal` constructor returns as the value asigned to `Dog.prototype`. This means that any object that you create from the `Dog` constructor will, by default, have the properties of the object returned from the `Animal` constructor. The thing to note about this approach is that it deviates from the idea that only behavior is shared throught the prototype chain. Consequently, it's possible that the users of the `Dog` constructor aren't aware of the existence of the `type` property on the objects created with `Dog` as neither the constructor nor its prototype explicitly define it. As an example, let's create an instance, `fido`, using the `Dog` constructor:

var fido = new Dog()
console.log(fido.type);  // land

// Notice that `type` has a value assinged to it, even though we did not explicitly set it. Considering that it's only methods that are usually delegated, this behavior can be unexpected.

// Method 2: Using the Object Created by Object.create(Animal.prtotype)

function Animal(type) {
  this.type = type;         
};

Animal.prototype.move = function() {
  console.log('Animal is moving.')
};

var Dog = function() {};
Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.say = function() {
  console.log(this.name + ' says Woof!');
};

Dog.prototype.run = function() {
  console.log(this.name + ' runs away.');
};

var fido = new Dog();
fido.move();             // => Animal is moving.


/// This method uses `Object.create` on `Animal.prototype` and assigns the object that it returns to `Dog.prototype`. Doing this leverages the fact that objects that `Object.create` returns have their `__proto__` property set to the object that was passed in as an argument, in this case `Animal.prototype`.

// The benefit of this approach is that, unlike the first method, there are no new properties that can be found on the created object and it is only "behavior" that is shared. Let's create again an instance, `fido`, of the `Dog` constructor:

var fido = new Dog;
console.log(fido.type); // returns undefined


// Both methods replace the original `Dog.prototype` which has a `constructor` property that referenced the `Dog` constructor function. As a result of the replacement, `Dog.prototype.constructor` now points to `Animal` instead. This doesn't have an impact on our code, though, since we aren't using the property. However, there are cases when you may want to make use of it.

var myDog = new Dog;
console.log(myDog.constructor);  // returns `Animal` constructor function

// When this happens, you have to manually reset the property like so:

var myDog = new Dog;
myDog.constructor 

Dog.prototype.constructor = Dog;
console.log(myDog.constructor); // reutrns `Dog` constructor function (an anonymous function)


















































