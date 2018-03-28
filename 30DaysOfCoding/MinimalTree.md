Given a sorted (increasing order) array with unique integer elements, write an algorithm to create a binary search tree with minimal height.

// Questions:  Is it sorted? Balanced tree?
// Thinking: sort the array. Work from the middle element.

```
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
