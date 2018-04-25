### Water Volume
You are given an array of non-negative integers that represents a two-dimensional elevation map where each element is unit-width wall and the integer is the height. Suppose it will rain and all spots between two walls get filled up.

Compute how many units of water remain trapped on the map in O(N) time and O(1) space.

For example, given the input [2, 1, 2], we can hold 1 unit of water in the middle.

Given the input [3, 0, 1, 3, 0, 5], we can hold 3 units in the first index, 2 in the second, and 3 in the fourth index (we cannot hold 5 since it would run off to the left), so we can trap 8 units of water.
```
 __    __
|  |//|  |
|  |//|  |
|  |//|  |
‾‾‾‾‾‾‾‾‾‾
```
The area of water in the above picture (and the result of calling volume([3,0,3])) is 3.

# Challenge: do this in O(n) with < 2 pass-throughs

## Examples
Input	Output
```heights:
[ 3, 0, 3 ]	3
heights:
[ 1, 2, 3, 4, 0, 5, 3, 1 ]	4
```

## My approach

#Thinking:
- Iterate through.
- First value, non-zero number is max
- continue, until number is equal or greater
   - Add first max
   - Reset local max to 0
   

```
const buildings = [3, 0, 1, 3, 0, 5];

const trap = (heights) => {
  let left = 0;
  let right = heights.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let ans = 0;
  
  while (left < right) {
    if (heights[left] < heights[right]) {
      heights[left] >= leftMax ? (leftMax = heights[left]) : ans += (leftMax - heights[left]);
      left++;
    } else {
      heights[right] >= rightMax ? (rightMax = heights[right]) : ans += (rightMax - heights[right]);
      right--;
    }
  }
  return ans;
};

```


