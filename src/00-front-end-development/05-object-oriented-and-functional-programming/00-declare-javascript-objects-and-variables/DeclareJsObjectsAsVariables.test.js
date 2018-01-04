// Should log "engines, wheels, and seats are numbers" to the console.

if ( ( typeof(motorBike.engines) && typeof(motorBike.wheels) && typeof(motorBike.seats) ) == "number") {
  console.log("engines, wheels, and seats are numbers");
} else {
  console.log("Error");
}
