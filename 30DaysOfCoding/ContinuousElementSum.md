This problem was asked by Lyft.

Given a list of integers and a number K, return which contiguous elements of the list sum to K.

For example, if the list is [1, 2, 3, 4, 5] and K is 9, then it should return [2, 3, 4].


Finds largest first
```
const findContinuous = (arr, k) => {
  let sum = 0;

  for(let i = arr.length - 1; i >= 0; i--){
    sum += arr[i];
    for(let j = i - 1; j >= 0; j--){
      sum += arr[j];
      if(sum === k){
        return arr.slice(j, i+1);
      } 
      if( sum > k){
        sum = 0;
        continue;
      } 
    }
  }
  return null;
}

findContinuous([1, 2, 3, 4, 5], 9)

```


