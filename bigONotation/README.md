## Big O Notation

**Overview**

Big O notation gives us a clear indicator of how efficient our code runs in light of both time and space complexity.

How "good" code is is determined by space/time complexity and readability.

Instead of counting variable seconds analyzing code, counting number of operations 
is more efficient due to consistency.

****

```javascript
const addUpTo = (n) => {
  return n * (n + 1) / 2;
};
```
- Contains 3 operations: multiply, add, divide
- No matter what 'n' is, there are always only 3 operations
- <img src="https://latex.codecogs.com/gif.latex?O(1)" title="O(1)" />

****

```javascript
const addUpTo2 = (n) => {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total
};
```
- Due to the loop, operations and assignments will grow as 'n' grows
- Roughly between 2n and 5n + 2
- <img src="https://latex.codecogs.com/gif.latex?O(n)" title="O(n)" />

****

```javascript
const countUpAndDown = (n) => {
  console.log('Starting')
  for (let i = 0; i < n; i++) {
    console.log(i)
  }
  for (let j = n - 1; j >= 0; j--) {
    console.log(j)
  }
  console.log('Ending')
};
```
- <img src="https://latex.codecogs.com/gif.latex?O(n)" title="O(n)" />

****

```javascript
const printAllPairs = (n) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++){
      console.log(i, j)
    }
  }
};
```

- Each loop runs at <img src="https://latex.codecogs.com/gif.latex?O(n)" title="O(n)" />
- The nested loop will cause this function to run at <img src="https://latex.codecogs.com/gif.latex?O(n^{2})" title="O(n^{2})" />
****

**Basic Big O Expressions**

- <img src="https://latex.codecogs.com/gif.latex?linear:&space;(f(n)&space;=&space;n)" title="linear: (f(n) = n)" />
- <img src="https://latex.codecogs.com/gif.latex?quadratic:&space;(f(n)&space;=&space;n^{2})" title="quadratic: (f(n) = n^{2})" />
- <img src="https://latex.codecogs.com/gif.latex?constant:&space;(f(n)&space;=&space;1)" title="constant: (f(n) = 1)" />