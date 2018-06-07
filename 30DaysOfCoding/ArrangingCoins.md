You have a total of n coins that you want to form in a staircase shape, where every k-th row must have exactly k coins.

Given n, find the total number of full staircase rows that can be formed.

n is a non-negative integer and fits within the range of a 32-bit signed integer.

Example 1:

n = 5

The coins can form the following rows:
¤
¤ ¤
¤ ¤

Because the 3rd row is incomplete, we return 2.
Example 2:

n = 8

The coins can form the following rows:
¤
¤ ¤
¤ ¤ ¤
¤ ¤

Because the 4th row is incomplete, we return 3.



```
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let i = 1;
    let leftOver = n;
    if(n < 2){
        return n;
    }
    while(leftOver - i >= 0){
       leftOver -= i;
        i++;
    }
    return i - 1;
};
```


Faster:

```
const arrangeCoins = () => {
  let lo = 1;
  let hi = n;
  let mid;
  while(lo <= hi){
    mid = Math.floor((lo + hi)/2);
    if((mid * (mid + 1)) / 2 <= n){
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return lo - 1;
}
   var lo=1,hi=n,mid;
    while(lo<=hi){
        mid=Math.floor((lo+hi)/2);
        if(mid*(mid+1)/2<=n){
            lo=mid+1;
        } else{
            hi=mid-1;
        }
    }
    return lo-1;
```
