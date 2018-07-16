Given an integer array with no duplicates. A maximum tree building on this array is defined as follow:

The root is the maximum number in the array.
The left subtree is the maximum tree constructed from left part subarray divided by the maximum number.
The right subtree is the maximum tree constructed from right part subarray divided by the maximum number.
Construct the maximum tree by the given array and output the root node of this tree.

Example 1:
Input: [3,2,1,6,0,5]
Output: return the tree root node representing the following tree:

      6
    /   \
   3     5
    \    / 
     2  0   
       \
        1
Note:
The size of the given array will be in the range [1,1000].


```
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    const findMax = (nums, left, right) => {
        let maxIndex = left;
        for(let i = left; i < right; i++){
            if(nums[maxIndex] < nums[i]){
                maxIndex = i;
            }
        }
        return maxIndex;
    };
    const construct = (nums, left, right) => {
        if(left === right){
            return null;
        }
        const maxIndex = findMax(nums, left, right);
        const root = new TreeNode(nums[maxIndex]);
        root.left = construct(nums, left, maxIndex);
        root.right = construct(nums, maxIndex + 1, right);
        return root;
    }
    
    return construct(nums, 0, nums.length);
};
```

We have two functions (construct and findMax).
Construct will create our tree. 
If the left and right parameter are the same, then that means we have met a leaf node (return null).
We then will call our findMax on the nums array, our left input and then our right input.

Our findMax function is where the magic happens.
We start from our left parameter as our MaxIndex, we then iterate through our nums array to find the maxIndex.

We exit our findMax function. This value is now our root. We then find the left and right by recursively calling it on the semgents of the arrays (left and right).
