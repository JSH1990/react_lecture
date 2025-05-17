//배열의 구조분해 할당
let arr = [1, 2, 3];

let [one, two] = arr;

// console.log(one, two);

let person = {
  name: "정승현",
  age: 27,
};

let { name, age, extra } = person;

console.log(name, age, extra);

//객체구조분해 할당을 이용해 함수의 매개변수받는 방법

const func = ({ name, age }) => {
  console.log(name, age);
};

func(person);
