//forEach

let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr) {
  console.log(idx, item * 2);
});

let doubleArr = [];

arr1.forEach((item) => {
  doubleArr.push(item * 2);
});

console.log(doubleArr);

//includes
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(10);
console.log(isInclude);

//indexOf
let arr3 = [2, 3, 5];
let index = arr3.indexOf(2);
console.log(index);

let arr4 = [1, 2, 3];
const findIndex = arr4.findIndex((item) => item === 999);

console.log(findIndex);

let objectArr = [{ name: "홍길동" }, { name: "정승현" }];

console.log(objectArr.findIndex((item) => item.name === "정승현"));

const finded = objectArr.find((item) => item.name == "정승현");
console.log(finded);
