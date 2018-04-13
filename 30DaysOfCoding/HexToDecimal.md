## Hexadecimal to Decimal
Build a function that converts a hexadecimal number to a base 10 number. Do not use toString or parseInt.

For more on hexadecimal numbers: https://en.wikipedia.org/wiki/Hexadecimal

### Examples
```
Input	Output
hex:
"ff"	255
hex:
"2329"	9001
hex:
"10"	16
```
```
function hexToDec (hex) {
  let len = hex.length - 1;
  let result = 0;
  const dictionary = {
    'a': 10,
    'b': 11,
    'c': 12,
    'd': 13,
    'e': 14,
    'f': 15,
  }
  hex.split('').forEach((h) => {
    const numEquivalent = Number.isInteger(Number(h)) ? h : dictionary[h.toLowerCase()];
    result += ((Math.pow(16,len) * numEquivalent));
    len--;
  })
  return result;
}

hexToDec("7de");
```
