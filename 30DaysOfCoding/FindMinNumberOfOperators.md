This question was asked by Evernote.

Description:
You have a call center. You are given an unordered dataset of start and end times in this format [[8:30, 10:22], [8:42, 10:00]].

Find the minimum number of operators to handle the number of concurrent calls happening simulataneously. 

Input: [[8:30, 10:22], [8:42, 10:00]]
Output: Integer

```
const findMinNumberOfOperators = (input) => {
  let count = 0;
  let minNumberOfOperators = 0; 
  let arrayOfObjects = [];
  
  //edge cases
  
  /**
  * Takes in the first and last part of a tuple, and the given position.
  * @param {number} tupleInt
  * @param {string} position
  * @return {type: string, value: number}
  */
  const createTimeObject = (tupleInt, position) => {
    return {type: position, value: tupleInt};
  }
  
  /**
  * Iterates over the time objects and 
  */
  input.forEach((timeSlot) => {
    arrayOfObjects.push(createTimeObject(timeSlot[0], 'start'));
    arrayOfObjects.push(createTimeObject(timeSlot[1], 'end'));
  });
  
  arrayOfObjects.sort((a,b) => {
    if(a.value > b.value){
      return 1;
    } else if(a.value < b.value){
      return -1;
    } else {
      return 0;
    }
  });
  console.log(arrayOfObjects)
  arrayOfObjects.forEach((timeInstance) => {
    if(timeInstance.type === 'start'){
      count++;
      minNumberOfOperators = Math.max(minNumberOfOperators, count)
    } else {
      count --;
    }
  });
  
  return minNumberOfOperators; 
}

const timeInputs = [[830, 1022], [9990, 10000], [0, 200], [1023, 1025],[720, 1010]];

findMinNumberOfOperators(timeInputs);
```
