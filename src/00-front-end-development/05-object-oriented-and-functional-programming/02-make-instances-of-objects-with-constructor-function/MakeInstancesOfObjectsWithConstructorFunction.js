var Car = function() {
    this.wheels = 4;
    this.engines = 1;
    this.seats = 5;
};

var myCar = new Car(); // myCar is now an instance of the car constructor.
myCar.nickname = "viper"; // myCar variable now has a property nickname with a value of "viper".

// Test:
console.log(myCar()); // { "wheels": 4, "engines": 1, "seats": 5, "nickname": "viper" }
