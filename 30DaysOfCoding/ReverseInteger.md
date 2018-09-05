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

```
const overflowCheck = (val) => {
    if(val >= 2147483647 || val <= -2147483647) return true;
}
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x, result = 0) {
    if(overflowCheck(x)) return 0;

    while(x !== 0){
        const rightMost = x % 10;
        result += rightMost;  
        x -= rightMost;
        x /= 10;
        if(x !== 0){
          result *= 10;  
        }
    }
    return overflowCheck(result) ? 0 : result;
};
```


```
const reverse = function(x) {
    // Sign function returns the sign of a number, indicating whether the number is positive, negative or zero.
    const pow = Math.pow(2, 31) * Math.sign(x);
    let num = '';
    x = Math.abs(x);

    while(x !== 0) {
        let remainder = x % 10;
        x = Math.floor(x / 10);
        num += String(remainder);
    }

    num = Number(num) * Math.sign(pow);

    if (pow > 0) {
        return num < pow - 1 ? num : 0
    } else {
        return num > pow ? num : 0
    }
};
```
