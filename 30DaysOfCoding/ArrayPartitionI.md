
Given an array of 2n integers, your task is to group these integers into n pairs of integer, say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.

Example 1:
Input: [1,4,3,2]

Output: 4
Explanation: n is 2, and the maximum sum of pairs is 4 = min(1, 2) + min(3, 4).
Note:
n is a positive integer, which is in the range of [1, 10000].
All the integers in the array will be in the range of [-10000, 10000].



```
const arrayPairSum = (arr) => {
  let sum = 0;
  const sorted = arr.sort((a,b) => a - b);
  for(let i = 0; i< sorted.length; i += 2){
    sum += sorted[i];
  }
  return sum;
}
```

One option. Description kind of sucks.

Faster option:

```
const arrayPairSum = (nums) => {
  const a  = new Array(20000);
  for(let i = 0; i < nums.length; i++) {
    let n = nums[i] + 10000;
    a[n]  = a[n] === undefined ? 1 : a[n] + 1;
  }
  
  for(let i = 0; i < 20000; i++){
    if(a[i] === undefined) continue;
    while(a[i] > 0){
      if(n%2 === 0){
        result +=  i - 10000;
      }
      n++;
      a[i]--;
    }
  }
  return result
}

```

1. Make a new array of 20,000. A given limit
2. Iterate through the nums length.
2b. Set n to equal the nums array value + 10,000
2c Test to see if 
