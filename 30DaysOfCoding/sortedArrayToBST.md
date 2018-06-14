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
var sortedArrayToBST = function(nums) {
    const buildTree = (nums) => {
        if(!nums.length){
            return null;
        }
        const middle = Math.floor(nums.length / 2);
        const leftSide = nums.slice(0, middle);
        const rightSide = nums.slice(middle+1);
        const rootNode = new TreeNode(nums[middle]);
        if(leftSide.length ||  rightSide.length){
            if(leftSide.length){            
                rootNode.left = sortedArrayToBST(leftSide);
            }
            if(rightSide.length){
                rootNode.right = sortedArrayToBST(rightSide);
            }
        }  
        return rootNode;
    }
    
    return buildTree(nums);
};
```

More Succint version

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
var sortedArrayToBST = function(nums, start = 0, end = nums.length - 1) {
    if (end < start) return null;
    
    const middleIndex = Math.floor((start + end) / 2);
    let node = new TreeNode(nums[middleIndex]);
    
    node.left = sortedArrayToBST(nums, start, middleIndex - 1);
    node.right = sortedArrayToBST(nums, middleIndex + 1, end);
    
    return node;
};
```
