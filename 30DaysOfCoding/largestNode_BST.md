Problem
This problem was asked by Dropbox.

Given the root to a binary search tree, find the second largest node in the tree.

***
thinking:

Reverse in-order traversal, where we first call ourselves recursively on the right node. Because it's reversed, that should give us the binary tree in reverse sorted order.


```
const secondLargest = (root) => {
  let count = 0;
  let value;
  
  const inOrder = (node){
    if(!node || count === 2){
      return;
    }
    
    if(node.right){
      inOrder(node.right);
    }
    
    count++;
    
    if(count === 2){
      val === node.val;
      return;
    }
    
    if(node.left){
      inOrder(node.left);
    }
  }
  
  inorder(root);
  return val;
}

```
