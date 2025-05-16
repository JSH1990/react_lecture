// 1.객체 생성

let obj1 = new Object();
let obj2 = {}; //객체 리터럴 (대부분 사용)

let person = {
  name: "정승현",
  age: 35,
  hobby: "MMA",
};

// 객체 프로퍼티 다루는 방법

let name = person.name;

let age = person["age"];
console.log(age);

// let property = "hobby";
let hobby = person["hobby"];
console.log(hobby);

// 새로운 프로퍼티를 추가하는 방법
person.job = "fe developer";
person["favoriteFood"] = "초콜롯";

console.log(person);

delete person.age;
console.log(person);

//프로퍼티의 존재유무 확인
let result1 = "name" in person;
let result2 = "cat" in person;
console.log(result1);
console.log(result2);
