const addUpTo = (n) => {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total
};
// console.log(addUpTo(5));

const addUpTo2 = (n) => {
  return n * (n + 1) / 2;
};
// console.log(addUpTo2(5));


// These are for the DOM
// let t1 = performance.now();
// let t2 = performance.now();

// const countUpAndDown = (n) => {
//   for (let i = 0; i < n; i++) {
//     console.log(i)
//   }
//   for (let j = n - 1; j >= 0; j--) {
//     console.log(j)
//   }
// };

const printAllPairs = (n) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++){
      console.log(i, j)
    }
  }
};

addUpTo(10000000);
addUpTo2(10000000);
// console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

// These are for running in the the terminal
console.time('addUpTo(1000)');
console.timeEnd('addUpTo(1000)');