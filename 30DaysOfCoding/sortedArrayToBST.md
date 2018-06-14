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
