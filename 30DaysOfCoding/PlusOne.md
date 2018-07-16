Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

Example 1:

Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Example 2:

Input: [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.


```
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for(let i = digits.length - 1; i >= 0; i--){

        if(digits[i] !== 9){
            const original = digits[i];
            digits[i] = Number(original) + 1;
            break;
        } else {
            if(i === 0){
                digits[i] = 0;
                digits.unshift(1);
                return digits;
            } 
            digits[i] = 0;
        }
    }
    return digits;
};
```

Faster:

```
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  const n = digits.length;
  let i = n-1;
  for (; i >= 0; i--) {
    if (digits[i] == 9) {
      digits[i] = 0;
    } else {
      break;
    }
  }
  if (i >= 0) digits[i] += 1;
  else digits.unshift(1);
  return digits;
};
```
keeping the i variable outside of the loop was a smart move. It enables you to evaluate where the last non 9 value is and increment there.
If the loop stopped at 0, then you add one to the front.
