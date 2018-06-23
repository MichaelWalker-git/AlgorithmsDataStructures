Input: Target {!Number}, InputArray Twisted Sorted List{!Array<Number>}
Output: Index of Target {!Number}

@param {!Array<number>} inputArray
@param {number} target
@return {number}
const findIndex = (inputArray, target) => {
  return inputArray.indexOf(target);
}

Time Complexity: O(n);
SpaceComplexity: O(1);

