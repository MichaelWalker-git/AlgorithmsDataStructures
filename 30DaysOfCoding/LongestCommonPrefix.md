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
```
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

Fastest Implementation:
```
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  
  if(!strs.length) return '';
  if(strs.length === 1) return strs[0];
  
  let prefix = strs[0];
  
  for(let i in strs) {
    while(strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if(!prefix.length) return '';
    }
  }
   return prefix; 
};
```

Major difference:
For loop - iterating over array instead of while(letterIndex <= smallestWordLength)
  While loop (only when word in array has prefix) 
    reset prefix
       prefix = prefix copy?
    if prefix is empty string
       return ''
return prefix
