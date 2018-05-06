Implement integer exponentiation. That is, implement the pow(x, y) function, where x and y are integers and returns x^y.

Do this faster than the naive method of repeated multiplication.

For example, pow(2, 10) should return 1024.

```
const repeatedPower = (a, b) => {
  let first = a;
  let second = b;
  while(second > 1){
    first *= a;
    second--;
  }
  return first;
}

 repeatedPower(2, 10)
```

Improved method 

```
const pow = (a, b) => {


}

```
