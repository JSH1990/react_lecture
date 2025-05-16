//null 병합연산자

let var1;
let var2 = 10;

let var3 = var1 ?? var2;

console.log(var3);

// 2. typeof 연산자
let var7 = 1;
var7 = "hello";

let t1 = typeof var7;
console.log(t1);

// 3. 삼항 연산자
//-> 조건식을 이용해서 참, 거짓일때의 값을 다르게 변환

let var8 = 10;

let res = var8 % 2 === 0 ? "짝수" : "홀수";

console.log(res);
