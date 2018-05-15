
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
