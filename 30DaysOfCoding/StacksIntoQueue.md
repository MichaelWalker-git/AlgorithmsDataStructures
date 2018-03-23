## Using two stacks (first in, last out), extend a class that will have the properties of a queue. (first in, first out)
```
QueueWithStacks extends Stacks {
  const stackOne = [];
  const stackTwo = [];
  
  size = () => {
    return stackOne.size() + stackTwo.size();
  }
  
  enQueue = (val) => {
    stackOne.push(val);
  }
  
  shiftStacks = () => {
    if(stackTwo.isEmpty()){
      while(!stackOne.isEmpty()){
        stackTwo.push(stackOne.pop());
      }
    }
  }
  
  peek = () => {
    shiftStacks();
    return stackTwo.peek();
  }
  
  deQueue = () => {
    shiftStacks();
    return stackTwo.pop()
  }
}
```

### Thought process: I struggled to get wrap my mind around the edge case (user deQueue, then user adds, then user deQueue). Then, I realized that we only need to conduct the shiftStack function, only when the secondStack is empty. That was the ahhhh moment.
