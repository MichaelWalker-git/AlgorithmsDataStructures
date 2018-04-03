## Given a binary tree, creat a linked list of all nodes at each depth

## Tree depth (d) => (d) linked lists

Thinking:
Breathe first.
Use a queue instead of a stack.

Modify depth first to find depth.
Map level to nodes in it.


Questions: When do I know I'm going down a level?
```
ListsOfDepths = (root) => {
  const q = [];
  
  const depthFinder = (root) => {
    const stack = [];
    let depth = 0;
    
    const nodeCheck = (node) => {
      if(!node) return false;

      if(!node.visited){
        node.visited = true;
        stack.push(node);
      }
    }
    
    stack.push(root);
    while(!stack.length){
      const n = stack.pop();
      if(nodeCheck(n.left)){
        return true;
      }
      if(nodeCheck(n.right)){
        return true;
      }
    }
    return depth;
  }
  
  depthFinder(root);
  
  // build number of linked lists
  
  
}


```


