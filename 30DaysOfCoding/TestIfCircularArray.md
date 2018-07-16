Determine whether a circular array fo relative indices is composed of a single complete cycle:

Input: @type !Array<number> inputArr
Output:  @type Boolean

/// Edge cases: 
// Loop, but not touching every single item in our index
// nothing inside
// one item in our inputArr should work
```
const testIfCircularArray = (inputArr, start) => {
   let hashSet = new Set();
   let currentIdx = start;

   while(hashSet.length <= inputArr.length){
      // Needs base case for loop without
      currentIdx = Math.abs((currentIdx + inputArr[currentIdx)] % inputArr.length);
      if(hashSet.has(currentIdx)){
        return false;
      } else {
        hashSet.set(inputArr[currentIdx]);
      }
   }

   return currentIdx === 0;
}
```

Example [2, 2, 1]

// false

Example: [2, 1, 2]


//How does modulo works with negative numbers
