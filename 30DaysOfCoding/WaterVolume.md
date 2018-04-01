### Water Volume
You are given an array of numbers that each represent the height of an adjoining building. During torrential rain, water collects in the spaces between buildings. What is the maximum amount of water collected by the buildings represented by the array?

Explanation:
An input of [3,0,3] can be visualized as such:
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
Need a left side.
Need a right side.

height = Math.min(left, right);
width = (heights[right] - heights[left]) - 1;
--------------------------------------------
Total - (blocks between) => Volume

Repeat for areas


```

const arr = [4,2,3];
function volume (heights) {
  let diff = 0;
  let leftSide = heights[0];
  
  for(let i = 1; i < heights.length; i++){

  }
  return diff;
}
volume(arr)
```