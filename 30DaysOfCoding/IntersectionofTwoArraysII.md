Given two arrays, write a function to compute their intersection.

Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].

Note:
Each element in the result should appear as many times as it shows in both arrays.
The result can be in any order.
Follow up:
What if the given array is already sorted? How would you optimize your algorithm?
What if nums1's size is small compared to nums2's size? Which algorithm is better?
What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?


```
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  const result = [];
  if(nums1.length > nums2.length){
     // start with smaller section
     nums2.forEach((item) => {
         const idx = nums1.indexOf(item);
         if(idx > -1){
             result.push(nums1.splice(idx, 1)[0]);
         }
     });
  } else {
     nums1.forEach((item) => {
         const idx = nums2.indexOf(item);
         if(idx > -1){
             result.push(nums2.splice(idx, 1)[0]);
         }
     }); 
  }
  return result;
};

```

Time Complexity: O(n^2)


One loop instead

```
var intersect = function(nums1, nums2) {
    const map = {};
    const res = [];
    
    nums1.forEach(num => {
        if (map[num] === undefined) {
            map[num] = 1;
        } else {
            map[num]++;
        }
    });
    
    nums2.forEach(num => {
        if (map[num] > 0) {
            res.push(num);
            map[num]--;
        }
    });
    
    return res;
};
```
