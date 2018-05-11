```INPUT
anagrams(['xxy', 'cab', 'bca', 'cab', 'bac', 'dash', 'shad'])

OUTPUT
[
  ['xxy'],
  ['cab', 'bca’, 'bac'],
  ['dash', 'shad']
]```

Group strings that are anagram of each other into a list without duplicate.

‘cab’ is an example duplicates removed. There are 2 ‘cab’ in the input and only 1 ‘cab’ in the output.
You can think of anagram as two words that have the same count per letter. You should treat upper and lower case differently.
'xxy’ is by itself because it doesn’t have any other strings that are anagram with ’xxy’

Abc and abc are NOT anagrams
abcc and abc are NOT anagrams
abc and cab are anagrams because each of them has 1 a, 1 b, and 1 c

You can assume it’s 256 ASCII

You don’t need to compile the code, let me know when you’re done implementing the code. If you’re unsure about the syntax, just make it up. 

```
@param {!Array<string>} stringArr
const stringArr = ['xxy', 'cab', 'bca', 'cab', 'bac', 'dash', 'shad']

const groupAnagram = (stringArr) => {
  const dict = new Map();
  const setStr = new Set(stringArr);
  const isAnagram = (str) => {
     const alphabetizedStr = str.split('').sort().join('')
     if(!dict.has(alphabetizedStr)){
      dict.set(alphabetizedStr, [str]);
     } else {
      const valueArr = dict.get(alphabetizedStr);
      dict.set(alphabetizedStr, [...valueArr, str]);
     } 
  }

  setStr.forEach((item) => {
    isAnagram(item);
  });

  return Array.from(dict, (key) => key[1]);  
}

groupAnagram(stringArr)

```
