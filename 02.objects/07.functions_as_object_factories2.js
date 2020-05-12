function makeCar(rate, brakeRate) {
  return {
    accelerate: function() {
      this.speed += this.rate;
    },
    speed: 0,
    rate: rate,
    brakeRate: brakeRate,
    brake: function() {
      if (this.brakeRate > this.speed) {
        this.speed = 0;
      } else {
        this.speed -= this.brakeRate;
      }
    },
  }
}

var sedan = makeCar(8, 6);
sedan.accelerate();
console.log(sedan.speed);
// 8
sedan.brake();
console.log(sedan.speed);
//2
sedan.brake();
console.log(sedan.speed);
//0

var coupe = makeCar(12);
coupe.accelerate();
console.log(coupe.speed);
// 12

var hatchBack = makeCar(9)