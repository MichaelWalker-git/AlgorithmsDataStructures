This problem was asked by Google.

The edit distance between two strings refers to the minimum number of character insertions, 
deletions, and substitutions required to change one string to the other. 
For example, the edit distance between “kitten” and “sitting” is three: substitute the “k” for “s”, substitute the “e” for “i”, and append a “g”.

Given two strings, compute the edit distance between them.


--------
Given two words word1 and word2, find the minimum number of operations required to convert word1 to word2.

You have the following 3 operations permitted on a word:

Insert a character
Delete a character
Replace a character
Example 1:

Input: word1 = "horse", word2 = "ros"
Output: 3
Explanation: 
horse -> rorse (replace 'h' with 'r')
rorse -> rose (remove 'r')
rose -> ros (remove 'e')
Example 2:

Input: word1 = "intention", word2 = "execution"
Output: 5
Explanation: 
intention -> inention (remove 't')
inention -> enention (replace 'i' with 'e')
enention -> exention (replace 'n' with 'x')
exention -> exection (replace 'n' with 'c')
exection -> execution (insert 'u')


Dynamic Programming question

```
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
        const m = word1.length;
        const n = word2.length;
        let cur = new Array(m+1);
    // take first word create first array of that length + 1
    // fill it starting at 0
        cur.fill(0);
    // Add wordOne matrix
        for(let i = 1; i <= m; i++){
            cur[i] = i;            
        }
    // Iterate through wordTwo 
        for(let j = 1; j <= n; j++) {
            // Save the first index of wordOne Matrix
            let pre = cur[0];
            // Change the index of our wordOne to wordTwo
            cur[0] = j;
            
            // iterate over wordOne
            for(let i = 1; i <= m; i++) {
                
                // Save the wordMatrix at index WordOne
                let temp = cur[i];
                
                // If the two letter words are the same
                if(word1[i-1] === word2[j-1]){
                    // the wordMatrix Index equals the firstIndex(pre) of wordOne 
                    cur[i] = pre;
                } else { 
                    // otherwise wordMatrix index equals the minimum between pre + 1, cur[i] + 1, cur[i -1] +1
                    cur[i] = Math.min(pre + 1, Math.min(cur[i] + 1, cur[i-1] + 1));
                }                
                // reset the pre to the index of cur[i], wordMatrix index
                pre = temp;
            }
        }
    return cur[m];
};
```
