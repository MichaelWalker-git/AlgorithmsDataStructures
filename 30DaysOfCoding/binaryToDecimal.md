** Given a number n (represented as a binary number string), convert n to base 10. Do NOT use parseInt(n, 2). You may use the parseInt function that takes in just one argument.

```
binaryToDecimal = (n) => {
  let sum = 0;
  for(let i = n.length - 1; i >= 0; i--){
     sum += n[i] * (Math.pow(2, n.length-1-i))
  }
  return sum;
}

```

