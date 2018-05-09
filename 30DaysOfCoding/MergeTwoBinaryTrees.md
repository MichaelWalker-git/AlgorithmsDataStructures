Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.

You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of new tree.

Example 1:
```
Input: 
	Tree 1                     Tree 2                  
          1                         2                             
         / \                       / \                            
        3   2                     1   3                        
       /                           \   \                      
      5                             4   7      
      
Output:

Merged tree:
	     3
	    / \
	   4   5
	  / \   \ 
	 5   4   7
```
Note: The merging process must start from the root nodes of both trees.

```
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
const mergeTrees = (t1, t2) => {
  const stack = [];
  stack.push([t1, t2]);
  if(!t1){
      return t2;
  }
 
  while(stack.length){
    let t = stack.pop();
    if(t[0] === null || t[1] === null){
      continue;
    }
    t[0].val += t[1].val;
    
    if(t[0].left === null) {
      t[0].left = t[1].left;    
    } else {
      stack.push([t[0].left, t[1].left]);
    }
    
    if(t[0].right === null) {
      t[0].right = t[1].right;    
    } else {
      stack.push([t[0].right, t[1].right]);
    }
  }
  return t1;
}
```

Iterative approach.

We make use of a stack. Each entry in the stack stores data in form [node <sub>tree1</sub>, node <sub>tree2</sub>].

1) start by pushing the root nodes of both the trees onto the stack.


2a) At every step, we remove the node pair from the top of the stack.
2b) We add the values corresponding to the two nodes and update the value of the corresponding node in the first tree.


3a) Check left child of the first tree.
3b) If exists, push left of tree1 and tree2
3b) Otherwise, push left of tree2 onto tree1


4a) Check right child of the first tree.
4b) If exists, push right of tree1 and tree2 onto the stack
4b) Otherwise, push right of tree2 onto tree1

5) If both left or right or null, we continue popping the next nodes from the stack.
