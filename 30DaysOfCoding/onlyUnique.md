##Only Unique
#Given a string, remove any characters that are not unique from the string.

###Examples
Input	Output
```
str:
"abccdefe"	"abdf"
str:
"hello there"	"o tr"
str:
"xyz"	"xyz"
str:
"iiii"	""
```

```
function onlyUnique (str) {
  const all = new Set();
  const repeats = new Set()
  str.split("").forEach((letter) => {
    if(!all.has(letter) && !repeats.has(letter)){
      all.add(letter);
    } else {
      all.delete(letter);
      repeats.add(letter);
    }
  })
  return Array.from(all).join('');
}
```
