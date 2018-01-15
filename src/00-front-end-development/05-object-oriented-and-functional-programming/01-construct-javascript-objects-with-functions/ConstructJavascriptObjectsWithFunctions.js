var Car = function() {
    this.wheels = 4;
    this.engines = 1;
    this.seats = 5;
};

var MotorBike = function() {
    this.wheels = 2;
    this.engines = 1;
    this.seats = 2;
};

console.log(MotorBike(engines)); // MotorBike should have a engines attribute set to a number.
console.log(MotorBike(wheels)); // MotorBike should have a wheels attribute set to a number.
console.log(MotorBike(seats)); // MotorBike should have a seats attribute set to a number.
