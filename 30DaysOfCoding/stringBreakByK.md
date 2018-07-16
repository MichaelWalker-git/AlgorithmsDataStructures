Given a string, s, and an integer, k.
---

Break up the string into multiple texts such that each text has a length of k or less.
---

You must break it up so that words don't break across lines.
---

If there's no way to break the text up, then return null.
---
You can assume that there are no spaces at the ends of the string and that there is exactly one space between each word.
---

Test:  "the quick brown fox jumps over the lazy dog" and k = 10

Answer: ["the quick", "brown fox", "jumps over", "the lazy", "dog"]

---

One Approach:
Break up the words by spaces.
Add the string by length < k
If end of iteration, add remainder
If not possible, return null.

```
const stringBreaker = (sentence, k) => {
  const result = [];
  let limit = 0;
  let tempArr = [];
  let tempArrStrLength = 0;
  const sentenceArray = sentence.split(' ');
  sentenceArray.some((word, index) => {
    if(limit + word.length > k){
      return null;
    } else if(tempArrStrLength + word.length > k) {
      result.push(tempArr.join(' '));
      tempArr = [word];
      tempArrStrLength = word.length;
    } else if(index === sentenceArray.length - 1){
      result.push(tempArr.join(' '));
      result.push(word)
    } else {
      tempArrStrLength += (word.length);
      tempArr.push(word);
    }
  });
  
  return result;
}

const sentence =  "the quick brown fox jumps over the lazy dog";
const k = 10;

stringBreaker(sentence, k);
```
