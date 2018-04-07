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
* Recursive approach
```
validateBST = (root) => {
  if(root === null){
    return true;
  }
  
  return checkLess(root.value, root.left) && checkMore(root.value, root.right);
  
  /**
  
  function checkLess(parentValue, currentNode) {
    if(!leftValue){
      return true;
    }
    return (currentNode.value < parentNode) && (checkLess(currentNode.value, currentNode.left)) && (checkMore(currentNode.value, currentNode.right));
  }
  
  /**
  
  function checkMore(parentNode, currentNode) {
    if(!currentNode){return true;}
    return (currentNode.value > parentNode) && (checkLess(currentNode.value, currentNode.left)) &&            (checkMore(currentNode.value, currentNode.right));
  }  
  
}

```
