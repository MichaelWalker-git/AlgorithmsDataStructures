
Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.

This is case sensitive, for example "Aa" is not considered a palindrome here.

Note:
Assume the length of given string will not exceed 1,010.

Example:
```
Input:
"abccccdd"

Output:
7
```
Explanation:
One longest palindrome that can be built is "dccaccd", whose length is 7.

```
const longestPalindrome = (string) => {
  let max = '';
  let cur = '';

  for (let i = 0; i < string.length; i++) {
    for (let j = i; j < string.length; j++) {
      cur = string.substr(i, j - i + 1);
      if (isPalindrome(cur) && cur.length > max.length) {
        max = cur;
      }
    }
  }

  return max;
}

const isPalindrome = (str) => {
  return str === str.split('').reverse().join('');
}
```
