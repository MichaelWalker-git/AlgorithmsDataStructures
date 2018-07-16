** Write an algorithm to find the 'next' node (ie, in order successor of a given node in a binary search tree. You may assume that each node has a link to its parent.

Thinking: 
In order traversal - left, current, right.
```
pseudoCode (n) {
  if(n has right subTree){
    return leftMost child of right subTree
  } else {
    while(n == right child of n.parent){
      n =  n.parent;
    }
    return n.parent
  }
}
```

*Actual code

```
inOrderSuccess = (node) => {
  if(node ===null){
    return null;
  }
  
  if(node.right !== null){
    return leftMostChild(node.right);
  } else {
    let current = node;
    let levelUp = q.parent;
    while(node !== null &&  levelUp.left !== current){
      levelUp = current;
      current = current.parent;
    }
    return levelUp
  }
}

function leftMostChild(node){
  if(node == null){
    return null;
  }
  
  while(node.left !== null){
    node = node.left;
  }
  return node;
}
```
