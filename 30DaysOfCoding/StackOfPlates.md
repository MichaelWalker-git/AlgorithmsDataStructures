## Stack of Plates

#### Imagine a literal stack of plates.
#### If the stack gets too high, it might topple.
#### Therefore, in real life, we would likely start a new stack when the previous stack exceeds some threshold.

#### Implement a data structure SetOfStacks that mimics this.
#### SetOfStacks should be composed of several stacks and should create a new stack, once the previous one exceeds capacity.
 
#### SetOfStacks.push() and SetOfStacks.pop() should behave identically to a single stack 
#### (that is, pop() should return the same values as it would if there were just in a single stack.)

```
class StackOfPlates extends Stack {
  let limit;
  let currentStackCount;
  let listsOfStacks = [];

  push = (val) => {
    if(currentStackCount === limit - 1){
      listsOfStacks.push([val]);
      currentStackCount = 0;
    } else {
      const last = listOfStacks.pop();
      last.push(val);
      listsOfStacks.push(last);
    }
    currentStackCount++;
  }
  
  pop = () => {
    if(listsOfStacks.isEmpty()){
      throw error;
    } else {
      const last = listsOfStacks.pop()
      return last.pop();
      if(!last.isEmpty()){
        listsOfStacks.push(last);
      }
    }
  }
}

```
### Follow Up

#### Implement a function popAt(index) @param {number} index which performs a pop operation on a specific sub-stack. 


Attempt #1
// Thinking is take Math.floor(index / capacity) => subStack index
```
class subPop extends StackOfPlates {
  
  // @param {number} index
  popAt = (index) => {
    const subStack = super.listsOfStacks[Math.floor(index / capacity)];
    return subStack.pop();
  }
}

```
 
 EDIT: Attempt 1 fails to accound for a rollover system. For example: If we pop an element from substack 2, it needs to roll over the first value from substack 3.
 
 However, if we discuss the tradeoff of this feature vs. time complexity, then it can be okay. 
 
 Full implementation here:
 
 ```
 
 class SetOfStacks {
   const stacks = [];
   let capacity;
   
   setOfStacks = (capacity) => {
    this.capacity = capacity;
   }
   
   getLastStack = () => {
    if (stacks.length === 0) return  null;
    return stacks[stacks.length -1)];
   }
   
   push = (val) => {
     const last = getLastStack();
     if(last !== null && !last.isFull()){
       last.push(v);
     } else {
       const stack = [];
       stack.push(val);
       stacks.push(stack);
     }
   }
   
   pop = () => {
     const last = getLastStack();
     if(last === null) throw error;
     let val = last.pop();
     if(last.size === 0){
       stacks.pop();
     }
     return v;
   }
   
   popAt = (index) => {
     return leftShift(index, true);
   }
   
   leftShift = (index, removeTop) => {
     stack = stacks[index];
     let removed_item;
     if(removeTop){
       removed_item = stack.pop();
     } else {
       removed_item = stack.removeBottom();
     }
     if(stack.isEmpty()){
       stacks.pop();
     } else if(stacks.size() > index + 1){
      int v = leftShift(index + 1, false);
      stack.push(v);
     }
     return removed_item;
   }
 }
 
 class Stack {
   let capacity;
   let top;
   let bottom;
   let size = 0;
   
   Stack = (capacity) => {
     this.capacity = capacity;
   }
   
   isFull = () => capacity === size;
   
   join = (above, below) => {
     if(below !== null) below.above = above;
     if(above !== null) above.below = below;
   }
   
   push = (val) => {
    if(size >= capacity) return false;
    size++;
    n = new Node(v);
    if(size === 1) bottom = n;
    join(n, top);
    top = n;
    return true;
   }
   
   pop = () => {
     const t = top;
     top = top.below;
     size--;
     return t.value;
   }
   
   isEmpty = () => {
     return size === 0;
   }
   
   removeBottom = () => {
     let b = bottom;
     bottom = bottom.above;
     if(bottom !== null){
       bottom.below === null;
     }
     size--;
     retun b.value
   }
   
 }
 
 ```
 


