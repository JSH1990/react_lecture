const person = {
  name: "이정환",
  sayHi() {
    console.log("안녕");
  },
};

person.sayHi();
person["sayHi"]();
