* Implement a function to check if a binary tree is a binary search tree.

Thinking:
Traverse the tree in order, place into an array, check if the array is in order.

Assuming there are no repeats.
```
ValidateBST = (root) => {
const result = [];

  traverseTree = (root) => {
    if(root.left){
      traverseTree(root.left);
    }
    result.push(root.value);
    if(root.right){
      traverseTree(root.right);
    }
  }
  
  validateResults = () => {
    result.forEach((item. index) => {
      if(item !== null && item < result[index +1]){
        return false;
      }
    }
  }
  traverseTree(root);
  validateResults();
  return true;
}
```
