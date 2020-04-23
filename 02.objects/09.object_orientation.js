var car = {
  fuel: 7.9,
  var mpg: 37,
};


var fuel = 7.9;
var mpg = 37;

var carFuel = 7.9;
var carMpg = 37;

var truckFuel = 14.4;
var truckM

// Object Oriented programming allows us to move complexity inside objects instead of exposing it globally. When we make changes we can restrict those changes to those objects; they don't ripple thoughout the entire project. Maintenance is easier when we can limit the scope of changes.

var smallCar = {
  fuel: 7.9,
  mpg: 37,
  range: function () {
    return this.fuel * this.mpg;
  },
};




function makeVehicle(fuel, mpg) {
  return {
    fuel: fuel,
    mpg: mpg,
    range: function() {
      return this.fuel * this.mpg;
    },
  };
};

var smallCar =  makeVehicle(7.9, 37);
smallCar.range();

var largeCar = makeVehicle(9.4, 29);
largeCar.range();

var truc = makeVehicle(14.4, 23);
truck.range();

