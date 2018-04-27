
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

Better:
Store any repeated computations

Rules:
All strings of length 1 are palindromes
s is a palindrome if s[1:-1] is a palindrome and the first and last character of s are the same

Process:
First, set each item along the diagonal A[i:i] to true, since strings of length 1 are always palindromes.

Then, check A[i:i+1] and set it to true if A[i] == A[i + 1] and false otherwise (check all strings of length 2).

Finally, iterate over the matrix from top to bottom, left to right, only examining the upper diagonal. Note that it doesn't make sense for j to be smaller than i, so that's why we only need to deal with half of the matrix. Set A[i][j] to true only if A[i + 1][j - 1] is true and A[i] == A[j].

Keep track of the longest palindromic substring we've seen so far.

```
const longestPalindrome = (s) => {
  if(!s){
    return '';
  }
  
  let longest = s[0];
  let A = [[ ]]
  
  // A = [[None for _ in range(len(s))] for _ in range(len(s))]

  for(let i = 0; i < s.length; i++){
    arr[i][i] = true;
  }
  
  for(let i = 0; i s.length - 1; i++){
    a[i][i + 1] = s[i] == s[i+1];
  }
  
  let i = 0;
  let k = 3;
  
  while(k <= s.length){
    while(i < (s.length - k + 1)){
      j = i + k - 1;
      A[i][j] = A[i + 1][j - 1] && s[i] == s[j];
      
      // Update longest if necessary
      if(A[i][j] && s.substring(i, j + 1).length > longest.length){
        longest = s.substring(i, j +1);
      }
      i += 1;
    }
    k += 1;
  }
  return longest;
}




```
