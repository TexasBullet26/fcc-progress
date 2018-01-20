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

console.log(MotorBike()); // MotorBike should have a engines attribute set to a number.
                          // MotorBike should have a wheels attribute set to a number.
                          // MotorBike should have a seats attribute set to a number.
{
  "wheels": 2,
  "engines": 1,
  "seats": 2
}

/*
 *
 *    var function = function() {
 *        object.property = number;
 *        object.property = number;
 *        object.property = number;
 *    };
 *
 */
