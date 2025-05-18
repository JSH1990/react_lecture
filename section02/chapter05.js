let arr = [1, 2, 3];

for (let item of arr) {
  // console.log(item);
}

let person = {
  name: "정승현",
  age: 35,
};

let keys = Object.keys(person);

for (let key of keys) {
  const value = person[key];
  console.log(key, value);
}

let values = Object.values(person);
console.log(values);

for (let key in person) {
  console.log(key);
}
