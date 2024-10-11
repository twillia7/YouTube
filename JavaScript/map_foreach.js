const numbers = [1, 2, 3, 4, 5];
const objects = [{ name: 'John', age: 20 }, { name: 'Jim', age: 25 }, { name: 'Jack', age: 22 }, { name: 'Mark', age: 28 }];

const nameList = objects.map((object) => {
  return object.name;
});

const doubleNumbers = numbers.map((number) => {
  return number * 2;
});

const objectWithLength = objects.map((object) => {
  object.length = object.name.length;
  return object;
});

const items = ["item1", "item2", "item3"];
const copyItems = [];

for (let i = 0; i < items.length; i++) {
  copyItems.push(items[i]);
}

items.forEach((item) => {
  copyItems.push(item);
});

numbers.filter((number) => {
  return number % 2 === 0;
}).forEach((number) => {
  console.log(number);
});

objects.forEach((object) => {
  console.log(`${object.name} is ${object.age} years old.`);
});

let count = 0;
objects.forEach(obj => {
  if (obj.name.startsWith('J')) {
    count++;
  }
});
console.log(`There are ${count} names that start with 'J'.`);

const messages = objects.map((object) => {
  return `${object.name} is ${object.age} years old.`;
});
console.log(messages);


const products = [
  { name: "backpack" },
  { name: "shoes" },
  { name: "shirt" },
];

// This is not recommended if you are not returning a new array
products.map((product) => {
  product.price = 100;
});

console.log(products);

// This is the recommended way to update the original array
products.forEach((product) => {
  product.price = 100;
});

console.log(products);

// If you want to create a new array with the updated price
const productsWithPrice = products.map((product) => {
  return { ...product, price: 100 };
});

console.log(productsWithPrice);