Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

Example 1:

Input: [1,3,5,6], 5
Output: 2
Example 2:

Input: [1,3,5,6], 2
Output: 1
Example 3:

Input: [1,3,5,6], 7
Output: 4
Example 4:

Input: [1,3,5,6], 0
Output: 0

WRONG
```
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length-1;
    while(start < end){
      const middle = Math.floor((start + end)/2);
      console.log(middle)
      if(target === nums[middle]){
          return middle;
      } else if (target > nums[middle]){
          start = middle + 1;
      } else {
          end = middle-1;
      }
    }
    console.log(nums[start],nums[end], target)
    if(target < nums[start]){
        return start;
    } else if(target > nums[start] && target < nums[end]){
        return end;
    } else {
        return end + 1;
    }
};
```
Did not have an out of bounds checker, which would have taken care of all the cases I was trying to be taken care of in the end if loops.



CORRECT

```
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let low = 0; 
    let high = nums.length - 1;
    
    while(low <= high){
        const middle = Math.floor((low + high)/2);
        
        // Check for out of Bounds
        if(low > nums.length - 1){
            return nums.length;
        }
        if(high < 0) {
            return 0;
        }
        
        if(nums[middle] == target){
            return middle;
        } else if(nums[middle] > target){
            high = middle - 1;
        } else{
            low = middle + 1;
        }
    }
    return low;
};
```
