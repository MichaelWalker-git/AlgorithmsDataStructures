
Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1
Example 2:

Input: [4,1,2,1,2]
Output: 4

```
/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
    const dict = {};
    nums.forEach((insta) => {
        if(dict.hasOwnProperty(insta)){
            delete dict[insta];
        } else {
            dict[insta] = 1;
        }
    });
    for(let prop in dict){
        return Number(prop);
    }
};

```

Faster:

```
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const length = nums.length;
    if(length <= 1) return nums[0];
    let result = 0;

    for(let i = 0; i < length; i++) {   
        result ^= nums[i];
    }
    
    return result;
};
```

Complexity Analysis

Time complexity : O(n). 

We only iterate through text{nums}nums, so the time complexity is the number of elements in nums.

Space complexity : O(1)O(1).
