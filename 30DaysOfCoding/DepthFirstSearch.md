**Use of stack instead of queue (breathe first)

```
depthFirstSearch extends Stack {
  search = (root, matches) => {
    /** {Stack} **/
    const stack = [];
    
    const visitNode = (node) => {
      if(node === null){
        return false;
      }
      
      if(!node.visited){
        stack.visited = true;
        stack.push(node);
      }
      return matches(node.data);
    }
    
    if(!root){return error}
    if(matches(root)){
      return true;
    }
    root.visited = true;
    stack.push(visited); 
    
    while(!stack.isEmpty()){
      const n = stack.pop();
      
      if(visitNode(node.left)){
         return true;
      }
      
      if(visitNode(node.right)){
         return truel
      }
      
    }
    
    return false;
  }
}

```
