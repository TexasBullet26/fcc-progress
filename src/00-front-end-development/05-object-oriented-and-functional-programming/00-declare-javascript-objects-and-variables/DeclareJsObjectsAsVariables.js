// Example:
var car = {
  "wheels": 4,
  "engines": 1,
  "seats": 5
};

// Solution:
var motorBike = {
  "wheels": 4,
  "engines": 1,
  "seats" 2
};

// Test:
if ( ( typeof(motorBike.engines) && typeof(motorBike.wheels) && typeof(motorBike.seats) ) == "number") {
  console.log("engines, wheels, and seats are numbers");
} else {
  console.log("Error");
}
