Given such an array, find the index of the element in the array in faster than linear time.
If the element doesn't exist in the array, return null.

For example, given the array [13, 18, 25, 2, 8, 10] and the element 8, return 4 (the index of 8 in the array).

You can assume all the integers in the array are unique.

```
const findRotationPoint = (arr) => {
  let i = Math.floor(arr.length / 2);
  let dist = i / 2;

  while(dist){
    if(arr[0] > arr[i] && arr[i - 1] > arr[i] || dist === 0) {
      break;
    } else if (arr[0] <= arr[i]){
      i += dist;
    } else if(arr[0] > arr[i]){
      i -= dist;
    } else {
      break;
    }
    dist /= 2;
  }
  return i;
}

const findIndex = (arr, num) => {
  let low = findRotationPoint(arr);
  let high = low - 1;
  let dist = Math.floor(arr.length /2);
  
  while(dist){
    if(dist === 0){
      return 'ERROR';
    }
    let guessIndex =  (low + high) % arr.length;
    let guess = arr[guessIndex];
    if(guess === num){
      return guessIndex;
    }
    
    if (guess < num) {
      low = Math.floor((low + dist) % arr.length);
    } 
    
    if (guess > num) {
      high = Math.floor((arr.length + high - dist) % arr.length);
    }
    dist /= 2;
  }
}

```

Approach:
Since we know the array is sorted.
The best approach would be to perform a binary search. However, we know that the array is also rotated a number of times. 

Instead, we can will find the rotation point. 
We will start in the middle. 
If middle value is less than 
