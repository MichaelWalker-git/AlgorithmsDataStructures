
Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.

Note:

Your returned answers (both index1 and index2) are not zero-based.
You may assume that each input would have exactly one solution and you may not use the same element twice.
Example:

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.

```
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    // use of two pointers
    let pointer1 = 0;
    let pointer2 = numbers.length - 1;
    while(pointer1 < pointer2){
        const sum = numbers[pointer1] + numbers[pointer2];
        if(sum === target){
            return [pointer1 + 1, pointer2 + 1];
        } else if(sum > target){
            pointer2--;
        } else {
            pointer1++;
        }
    }
};

```
Even faster:
```
const twoSum = (numbers, target) => {
  for(let i = 0; i< numbers.length; i++){
    temp = numbers.indexOf(target-numbers[i], i +1);
    // indexOf takes in two parameters, first is the value we are looking for, and second is the starting place in the array.
    // in this case, we are looking for target - current number, starting at current number
    if(temp !== undefined) return [i + 1, temp + 1]l
  }
}

// Another fast attempt.
var twoSum = function(numbers, target) {
    const hashTable = {};
    for(var i=0;i<numbers.length;i++){
        const current = numbers[i];
        if(hashTable[target - current]!==undefined){
            return [hashTable[target-current]+1,i+1];
        }
        hashT[current] = i;
    }
};
