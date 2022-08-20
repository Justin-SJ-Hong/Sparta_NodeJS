const result1 = Promise.resolve('result1 resolved');
const result2 = new Promise((resolve) => resolve('result2 resolved'));

result1.then((message) => {
  console.log(message);
});

result2.then((message) => {
  console.log(message);
});
