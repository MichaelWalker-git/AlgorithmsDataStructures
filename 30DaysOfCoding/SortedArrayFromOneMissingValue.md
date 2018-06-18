Give n <Array{number}> starting from 1 to m, find the missing value.

Iterative approach. O(n) time.
```
@param {!Array<number>} arr
const findMissingValue = (arr) => {
  for(let i = 0; i< arr.length; i++){
    if(arr[i] !== i + 1){
      return i + 1;
    }
  }
}

```

Other approach is to use binary search

[1,2,4,5]
[1,3,4,5]
```
@param {!Array<number>} arr
const findMissingValue = (arr) => {
  const middle = Math.floor(arr.length/2);
  if(arr[middle] === index + 2){
    return arr[middle]
  } else if(arr[middle] === index + 1){
      return findMissingValue(arr.slice(0, middle));
  } else {
      return findMissingValue(arr.slice(middle +1));
  }
}
```
