Given a directed graph, design an algorithm to find out whether there is a route between two nodes.

Thinking: Breathe first would be best to find a relationship. Depth first is best for visiting all nodes.

Breathe first:
// make sure we break when it has been found
// visited nodes should be checked off as to avoid endless cycles
// 
```
search = (root, target) => {
  let q = new Queue();
  if(root.value === target){
    return root;
  }
  root.marked = true;
  q.enqueue(root);
  
  while(!q.isEmpty()) {
    let r = q.deQueue();
    visit(r);
    r.adjacent.forEach((node) => {
      if(node.value === target){
        return node;
      }
      if(node.marked === false){
        node.marked = true;
        q.enQueue(node);
      }
    })
  }
}
```
