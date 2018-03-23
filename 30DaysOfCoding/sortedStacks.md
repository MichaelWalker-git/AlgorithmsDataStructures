### Sort Stack:
# Write a program to sort a stack such that the smallest items are on the top. You use an additional temporary stack, but you may not copy the elemnts into any other data structure such as an array. 

# The stack supports the following operations: push, pop, peek, isEmpty.


Thought process:
First number is the cutoff point. Those that are larger go into the temporary stack.
If the number is smaller, the cutoff number goes into the temporary stack.
The smaller number is the new cutoff.

```
class sortedStack {
  const stackOne = [];
  cosnt stackTwo = [];

  insert = (val) => {
    if(!stackTwo.isEmpty() && !stackOne.isEmpty()){
      stackTwo.push(val)
    } else if(!stackTwo.isEmpty()) {
      if (val <= stackTwo.peek()){
        stackOne.push(stackTwo.pop());
        insert(val);
      } else {
        stackTwo.push(val);
        pushStackOneToTwo();
      }
    } else {
      dealWithFullStackOneEmptyStackTwo(val);
    }
  } 
  
  dealWithFullStackOneEmptyStackTwo = (val) => {
      if(val > stackOne.peek()){
        stackTwo.push(stackOne.pop());
        dealWithFullStackOneEmptyStackTwo(pop)
      } else {
        stackTwo.push(val);
        pushStackOneToTwo();
      }
  }
  
  pushStackOneToTwo = () => {
     while(!stackOne.isEmpty()){
        stackTwo.push(stackOne.pop());
     }
  }
  
  findMin = () => {
    while(!stackTwo.isEmpty()){
      stackOne.push(Stack2.pop);
    }
    return stackOne.pop();
  }
}
```
