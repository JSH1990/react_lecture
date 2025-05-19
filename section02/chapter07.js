// filter
let arr1 = [
  { name: "정승현", hobby: "mma" },
  { name: "홍길동", hobby: "골프" },
];

const golfPeople = arr1.filter((item) => item.hobby === "골프");

// console.log(golfPeople);

// map
let arr2 = [1, 2, 3];

const map = arr2.map((item, idx, arr) => {
  // console.log(idx, item);
  return item * 2;
});

// console.log(map);

let names = arr1.map((item) => item.name);
// console.log(names);

// sort
let arr3 = [10, 3];
arr3.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
});
// console.log(arr3);

//toSorted
let arr5 = ["b", "a"];
const sorted = arr5.toSorted();
console.log(arr5);

//join
let arr6 = ["a", "b"];
const test = arr6.join("=");
console.log(test);
