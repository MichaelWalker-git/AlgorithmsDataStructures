Given such an array, find the index of the element in the array in faster than linear time.
If the element doesn't exist in the array, return null.

For example, given the array [13, 18, 25, 2, 8, 10] and the element 8, return 4 (the index of 8 in the array).

You can assume all the integers in the array are unique.

```
const findIndex = (arr, k) => {
  if(!k){
    return null;
  }

}

```

Approach:
Since we know the array is sorted.
The best approach would be to perform a binary search. However, we know that the array is also rotated a number of times. 

Instead, we can will find the rotation point. 
We will start in the middle. 
