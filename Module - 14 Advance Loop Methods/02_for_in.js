// 👉 for...in Loop

// for...in loop used when we want to iterates over the properties of an object.

let car = {
  company: "Mahindra & Mahindra",
  modal: "Thar Roxx",
  price: "22 Lakhs",
};

for (const key in car) {
  console.log(`${key} of ${car[key]}`);
}

// 👉 The Object.keys() method returns an array with the keys of an object.

const carKeys = Object.keys(car);
console.log(carKeys); // ['company', 'modal', 'price']

// 👉 The Object.values() returns the values of all object keys (properties)

const carValues = Object.values(car);
console.log(carValues);

// 👉 Object.entries() returns the keys and values of any object types.

const carEntries = Object.entries(car);
console.log(carEntries); // [["company", "Mahindra & Mahindra"],["modal", "Thar Roxx"],["price", "22 Lakhs"]]
