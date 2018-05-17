Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Note:

All given inputs are in lowercase letters a-z.

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let result = '';
  let letterIndex = 1;

  if(!strs.length){
      return result;
  }
    
  const smallWordLength = strs.reduce((first, sec) => {
      return (first.length < sec.length) ? first : sec;
  }).length;
    
  while(letterIndex <= smallWordLength){
    const currentStr = strs[0].substr(0, letterIndex);
    if(strs.every((a) => a.substr(0, letterIndex) === currentStr)){
        result = currentStr;
    } else {
      break;
    }
    letterIndex++;
  }
  return result;
};
```
