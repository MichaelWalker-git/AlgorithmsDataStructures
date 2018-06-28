There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

Example 1:
nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:
nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5


```
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let middle = (nums1.length + nums2.length)/2;
    let result = [];
    while(nums1.length || nums2.length){
      if(!nums1.length){
          result = [...result, ...nums2];
          nums2 = [];
      } else if(!nums2.length){
          result = [...result, ...nums1];
          nums1 = [];
      }  
        
      if(nums1[0] <= nums2[0]){
          result.push(nums1.shift());
      } else if(nums2[0] <= nums1[0]){
          result.push(nums2.shift());
      }
    }
    if(middle % 1 > 0){
        return result[Math.floor(middle)];
    } else {
       const lower = result[middle -1];
       const upper = result[middle];
       return (upper +  lower) / 2;
    }
};
```
