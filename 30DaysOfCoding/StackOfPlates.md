## Stack of Plates

#### Imagine a literal stack of plates.
#### If the stack gets too high, it might topple.
#### Therefore, in real life, we would likely start a new stack when the previous stack exceeds some threshold.

#### Implement a data structure SetOfStacks that mimics this.
#### SetOfStacks should be composed of several stacks and should create a new stack, once the previous one exceeds capacity.
 
#### SetOfStacks.push() and SetOfStacks.pop() should behave identically to a single stack 
#### (that is, pop() should return the same values as it would if there were just in a single stack.)


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


### Follow Up

#### Implement a function popAt(index) @param {number} index which performs a pop operation on a specific sub-stack. 

// Thinking is take Math.floor(index / capacity) => subStack index

class subPop extends StackOfPlates {
  
  // @param {number} index
  popAt = (index) => {
    const subStack = super.listsOfStacks[Math.floor(index / capacity)];
    return subStack.pop();
  }
}





