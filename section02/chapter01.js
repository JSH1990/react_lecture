//1. Falsy 한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

if (!f2) {
  console.log("falsy");
}

//2. Truthy 한 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

if (t5) {
  console.log("Truthy");
}

function printName(person) {
  if (!person) {
    console.log("person 값이 없음");
    return;
  }
  console.log(person.name);
}

let person = null;
printName(person);
