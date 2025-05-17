// //단락평가
// function returnFalse() {
//   console.log("False 함수");
//   return undefined;
// }

// function returnTrue() {
//   console.log("True 함수");
//   return true;
// }

// console.log(returnFalse() && returnTrue());

function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName();
