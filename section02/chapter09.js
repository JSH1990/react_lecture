const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const num = 10;

    if (typeof num === "number") {
      resolve(num + 10);
    } else {
      reject("num이 숫자가 아닙니다.");
    }
  }, 2000);
});

promise.then((value) => {
  console.log(value);
});

promise.catch((error) => {
  console.log(error);
});
