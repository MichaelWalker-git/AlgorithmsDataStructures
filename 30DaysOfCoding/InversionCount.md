This problem was asked by Google.

We can determine how "out of order" an array A is by counting the number of inversions it has.
Two elements A[i] and A[j] form an inversion if A[i] > A[j] but i < j. 
That is, a smaller element appears after a larger element.

Given an array, count the number of inversions it has. Do this faster than O(N^2) time.

You may assume each element in the array is distinct.

For example, a sorted list has zero inversions. The array [2, 4, 1, 3, 5] has three inversions: (2, 1), (4, 1), and (4, 3). 
The array [5, 4, 3, 2, 1] has ten inversions: every distinct pair forms an inversion.


Brute Force:
```
const inversionFinder = (arr) => {
  const result = [];
  for(let i = 0; i< arr.length; i++){
    for(let j = i+ 1; j< arr.length; j++){
      if(i > j &&  arr[i] < arr[j]){
        result.push((arr[i], arr[j]));
      }
    }
  }
}

```

## First, let's separate our input array into two halves A and B
## Count the number of inversions in each list recursively
## Count the inversions between A and B
## Return the sum of all three counts
```

const countInversion = (arr) => {
  let count;
  const _ = countInversionsHelper(arr);
  return count;
}

const countInversionsHelper = (arr) => {
  if(arr.length <=  1){
    return 0;
  }
  let middle = arr.length / 2;
  let a = arr.slice(0, middle);
  let b = arr.slice(middle);
  
  leftCount = countInversionsHelper(a);
  rightCount = countInversionsHelper(b);
  betweenCount = mergeAndCount(leftCount, rightCount);
  
  return leftCount + rightCount + betweenCount;
}

const mergeAndCount = (a, b) => {
  let count = 0;
  let sortedArray = [];
  let i = 0;
  let j = 0;
  
  while(i < a.length && j < b.length ){
    if(a[i] < b[j]){
      sortedArray.push(a[i]);
      i += 1;
    } else {
      sortedArray.push(b[j]);
      count += a.length - i;
      j += 1;
    }
  }
  sortedArr.extend(a.slice(i));
  sortedArr.extend(b.slice(i));
  return count;
}

    ```
    
