Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true

```
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const dict = {
      ')' : '(' ,
      '}' : '{' ,
      ']' : '[',
  };
  const stack = [];    

  for(let i = 0; i < s.length; i++){
      const char = s.charAt(i);
      if(Object.values(dict).includes(char)){
          stack.push(char);
      } else if(Object.keys(dict).includes(char)){
          console.log(dict[char])
          if(stack.length === 0 || dict[char] !== stack.pop()){
              return false;
          }
      } else {
          return false;
      }
  }
  return stack.length === 0;
};

```
