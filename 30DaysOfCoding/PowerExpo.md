Implement integer exponentiation. That is, implement the pow(x, y) function, where x and y are integers and returns x^y.

Do this faster than the naive method of repeated multiplication.

For example, pow(2, 10) should return 1024.

```
const repeatedPower = (a, b) => {
  let base = a;
  let exponent = b;
  if(b < 0){
    base = 1/ a;
    exponent = -b;
  } 
  while(exponent > 1){
    base *= a;
    exponent--;
  }
  return base;
}

 repeatedPower(2, 10)
```

Improved method:

We re-write x<sup>y</sup> as:

if y = even, then x<sup>y</sup> = (x<sup>2</sup> )<sup>(y / 2)</sup> 


if y = odd, then x<sup>y</sup> = (x<sup>2</sup> ) <sup>(y - (1/2)) </sup>

```
const pow = (a, b) => {
  let base = a;
  let exponent = b;
  if(b < 0){
    base = 1/ a;
    exponent = -b;
  }
  let coeff = 1;
  while(y > 1){
    if (y % 2 === 0) {
      base *= base;
      y /= 2;
    } else {
      coeff *= base;
      base *= base;
      y = (y - 1) / 2;
    }
  }
  return base * coeff;
}

```
