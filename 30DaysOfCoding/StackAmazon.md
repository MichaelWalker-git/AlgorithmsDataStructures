## Implement a stack that has the following methods:

### push(val), which pushes an element onto the stack
### pop(), which pops off and returns the topmost element of the stack. 
If there are no elements in the stack, then it should throw an error or return null.
### max(), which returns the maximum value in the stack currently. If there are no elements in the stack, then it should throw an error or return null.

```
Class Stack {
  const stack = [];
  const max = [];
  let maxValue;
  
  push = (val) => {
    if(!maxValue){
      maxValue = val;
    }
    maxValue = Math.max(maxValue, val);
    max.push(maxValue);
    stack.push(val); 
  }
  
  pop = () => {
    if(!stack.length){
      return null;
    }
    max.pop();
    return stack.pop();
  }
  
  max = () => {
    if(maxValue.length === 0) {
      return null
    }
    return max.peek();
  }

}
```
