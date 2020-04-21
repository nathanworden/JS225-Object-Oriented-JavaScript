// All cars start out not moving, and sedans
// can accelerate about 8 miles per hour per second (mph/s).

// var sedan = {
//   speed: 0,
//   rate: 8,

//   accelerate: function() {
//     this.speed += this.rate;
//   },
// };

//   // To accelerate, add the rate of acceleration
//   // to the current speed.

// console.log(sedan);
// sedan.accelerate();
// console.log(sedan);

function makeCar(accelRate, brakeRate) {
  return {
    speed: 0,
    accelRate: accelRate,
    brakeRate: brakeRate,
    accelerate: function() {
      this.speed += this.accelRate;
    },
    brake: function() {
      this.speed -= this.brakeRate;
      if (this.speed < 0) {
        this.speed = 0;
      }
    }
  };
};


// var sedan = makeCar(8);
// sedan.accelerate();
// console.log(sedan.speed); // 8

// var coupe = makeCar(12);
// coupe.accelerate();
// console.log(coupe.speed); // 12

// var hatchback = makeCar(9);


var sedan = makeCar(8, 6);
sedan.accelerate();
console.log(sedan.speed); // 8

sedan.brake();
console.log(sedan.speed); // 2

sedan.brake();
console.log(sedan.speed); // 0