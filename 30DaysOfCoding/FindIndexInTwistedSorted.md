Input: Target {!Number}, InputArray Twisted Sorted List{!Array<Number>}
Output: Index of Target {!Number}
```
@param {!Array<number>} inputArray
@param {number} target
@return {number}
const findIndex = (inputArray, target) => {
  return inputArray.indexOf(target);
}
  ```

Time Complexity: O(n);
SpaceComplexity: O(1);


Faster? 

Use binary search
Find inflection point
Correct Sorted Array
Binary search for target

```
/** @param {!Array<number>} inputArray
 *  @param {number} target
 */ @return {number}
const findIndex = (inputArray, target) => {
  let inflectionPt;
  let sortedArray;
  /** 
  * @param {!Array<number>} inputARray
  * @return {number}
  */ 
  const findInflectionPoint = (inputArray) => {
    let middle =  Math.floor(inputArray.length / 2);
    let leftSide = inputArray[0];
    let rightSide = inputArray[inputArray.length - 1];
  }
  
    /** 
  * @param {!Array<number>} inputARray
  * @return {number}
  */ 
  const findTarget = (sortedArray, target) => {
    let leftSide = 0;
    let rightSide = sortedArray.length -1;
    while(left < rightSide){
      let middle =  Math.floor(sortedArray.length / 2);
      if(middle === target){
        return middle;
      } else if(target < middle){
        rightSide = middle - 1;
      } else {
        leftSide = middle + 1;
      }
    }
  }
  
  
  inflectionPt = findInflectionPoint(inputArray);
  sortedArray = [...inputArray.slice(inflectionPt +1), ...inputArray.slice(0, inflectionPt +1)];
  
  return findTarget(sortedArray);
}
  ```
  
