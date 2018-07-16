Largest Sum Contiguous Subarray
Write an efficient JS program to find the sum of contiguous subarray within a one-dimensional array of numbers which has the largest sum.

```
const maxSubArraySum = (a) => {
      
    let max_so_far = Math.min.apply(null,a) - 1;
    let max_ending_here = 0;
      
    for(let i = 0; i< a.length; i++){
      max_ending_here = max_ending_here + a[i];
      if (max_so_far < max_ending_here){
        max_so_far = max_ending_here;
      }
      // start over 
      if(max_ending_here < 0){
        max_ending_here = 0;   
      }
    }   
    return max_so_far;
}
maxSubArraySum([-2, -3, 4, -1, -2,1, 5, -3])
```
