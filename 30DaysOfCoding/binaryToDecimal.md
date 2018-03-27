** Convert binary numbers to decimals.

```
binaryToDecimal = (n) => {
  let sum = 0;
  for(let i = n.length - 1; i >= 0; i--){
     sum += n[i] * (Math.pow(2, n.length-1-i))
  }
  return sum;
}

```

