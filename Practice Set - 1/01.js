function numberOfTrips(passenger) {
  const totalPassengers = 12;
  const trips = totalPassengers / passenger;
  return trips;
}

console.log(numberOfTrips(1));
console.log(numberOfTrips(2));
console.log(numberOfTrips(3));
console.log(numberOfTrips(4));
