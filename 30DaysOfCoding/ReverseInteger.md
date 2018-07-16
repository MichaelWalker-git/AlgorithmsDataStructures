Reverse Integer

Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.


```
/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
  let reverseNum = 0;
  while(x !== 0){
    let lastDigit = x % 10;
    x = (x - lastDigit) / 10; 
    reverseNum = (reverseNum * 10) + lastDigit;
  }
  if(reverseNum >= 2147483647 || reverseNum <= -2147483647) return 0;

  return reverseNum;
};

```
