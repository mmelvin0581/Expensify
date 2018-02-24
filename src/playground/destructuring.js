// Object Destructuring

// const person = {
//   name: "Michael",
//   age: 31,
//   location: {
//     city: "Statesboro",
//     temp: 75
//   }
// };

// console.log(`${person.name} is ${person.age}.`);

// const name = person.name;
// const age = person.age;

// console.log(`${name} is ${age}.`);

// const { name, age } = person;

// console.log(`${name} is ${age}.`);

// if (person.location.city && person.location.temp) {
//   console.log(`It's ${person.location.temp} in ${person.location.city}.`);
// }

// const { city, temp } = person.location;

// if (person.location.city && person.location.temp) {
//   console.log(`It's ${temp} in ${city}.`);
// }

// const { city, temp: temperature } = person.location;

// if (person.location.city && person.location.temp) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// const { name: firstName = "Anonymous", age } = person;

// console.log(`${firstName} is ${age}.`);

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin"
//   }
// };

// const { name: publisherName = "Self-Published" } = book.publisher;

// console.log(publisherName); // Penguin, Self-Published

//
// Array Destructuring
//

// const address = [
//   "1299 S Juniper Street",
//   "Philadelphia",
//   "Pennsylvania",
//   "19147"
// ];

// // const [street, city, state, zip] = address;

// // const [street, city, state] = address;

// // const [, city, state] = address;

// const [, city, state = "New York"] = address;

// console.log(`You are in ${city}, ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} cost ${mediumPrice}`);
