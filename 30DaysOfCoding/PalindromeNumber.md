Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Example 1:

Input: 121
Output: true
Example 2:

Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
Follow up:

Coud you solve it without converting the integer to a string?

```
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    return x.toString() === x.toString().split('').reverse().join('');
};

```

Faster: 
```

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if ( x < 0 ) {
        return false;
    }
    const xCopy = x;
    let xRev = 0;
    
    while(x !== 0) {   // x = 0; xRev = 12321
        if (xRev > 0) {
            xRev *= 10;
        }
        xRev += x % 10;
        x = parseInt(x/10);
    }
    
    return xCopy === xRev;
};
```

Explanation:
If x is less than 0, return false.
while(x !== 0)
  if xRev is greater than 0
    then xRev = xRev multiplied by 10
  else
    xRev now equals (x divided by 10)
    x = parseInt(x/10) // parses a string argument and returns an integer of the specified radix; 
      // translation: if x is less than 0; makes it 0
    
test if xCopy(original number) === xRev

