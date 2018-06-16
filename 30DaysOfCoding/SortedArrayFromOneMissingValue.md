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

