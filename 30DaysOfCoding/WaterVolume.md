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

Here we will be needing two extra arrays for holding height of highest tower to left on any tower say:
`int leftMax[],
int rightMax[]
`
STEP-1

We make a left pass of the given array (i.e int tower[]),and will be maintaining a temporary maximum (say int tempMax) such that on each iteration height of each tower will be compared to tempMax, and if height of current tower is less than tempMax then tempMax will be set as highest tower to left of it, otherwise height of current tower will be assigned as the heighest tower to left and tempMax will be updated with current tower height,

STEP-2

We will be following above procedure only as discussed in STEP-1 to calculate highest tower to right BUT this times making a pass through array from right side.

STEP-3

The amount of water which each tower can hold is-

(minimum height between highest right tower and highest left tower) – (height of tower)

calculateVolumeBetweenTowers = (arr) => {
  let leftMax = [];
  let rightMax = [];
  let tempMax;
  for(let i = 0; i < arr.length; i++){
   
  }
  for(let j = arr.length -1; j >= 0; j--){
  
  }
}
