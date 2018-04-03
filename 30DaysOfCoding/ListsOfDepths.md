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
** CTCI solution
*Important that we know what level we are on.
*Mutation of preorder traversal, passing level+1 on each recursive call.

```
const createLevelLinkedList = (root) => {
  /** @const {!Array<LinkedList<TreeNode>>}
  const lists = [];
  
  createLevelLL = (root, lists, 0);

  return lists;
}

const createLevelLL = (root, lists, level) => {
  if(root === null) return; // base case
  
  /** @private {TreeNode} **/
  let list_ = null;
  
  if(list.size() === level){
    list = new LinkedList();
    // levels are always traversed in order. If it is the 1st time, we visit level i,
    // otherwise, we assume we have visited level - 1 already. Therefore, we can always
    // safely add to the end of lists.
    lists.add(list);
  } else {
    list_ = lists.get(level);
  }
  list.add(root);
  createLevelLL(root.left, lists, level+1);
  createLevelLL(root.right, lists, level+1);
}

```
