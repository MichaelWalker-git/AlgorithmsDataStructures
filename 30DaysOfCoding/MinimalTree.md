Given a sorted (increasing order) array with unique integer elements, write an algorithm to create a binary search tree with minimal height.

// Questions:  Is it sorted? Balanced tree?
// Thinking: sort the array. Work from the middle element.

```
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
const sortedArrayToBST = function(nums) {
    const sorted = nums.sort((a, b) => a - b);
    let tree = [];
    console.log(sorted)
    pullOutMiddle = (sorted) => {
        if(sorted.length > 2) {
           let middle = Math.floor(sorted.length/2);
           tree.push(sorted[middle])
           
           pullOutMiddle(sorted.slice(0, middle-1));
           pullOutMiddle(sorted.slice(middle));
        } else {
           tree = [...tree, sorted[1]];
           
           return tree;
        }
    }
    pullOutMiddle(sorted)
    return tree;
};

// Wrong output

```
##Appropriate approach
```
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const sortedArrayToBST = function(nums) {
    if(nums.length === 0){
        return null;
    }
    return midNode(nums, 0, nums.length -1);
};

function midNode(nums, low, high) {
    if(low > high) {
        return null;
    }
    
    const mid = Math.floor((low+high)/2);
    const node = new TreeNode(nums[mid]);
       
    node.left = midNode(nums, low, mid-1);
    node.right = midNode(nums, mid+1, high);
    return node;
}
```
