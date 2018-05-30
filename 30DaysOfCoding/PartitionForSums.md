Given a multiset of integers, return whether it can be partitioned into two subsets whose sums are the same.

For example, given the multiset {15, 5, 20, 10, 35, 25, 10}, it would return true, since we can split it up into {15, 5, 10, 15, 10} and {20, 35}, which both add up to 55.

Given the multiset {15, 5, 20, 10, 35}, it would return false, since we can't split it up into two subsets that add up to the same sum.

Thinking:
Need to sum up all values first?

Then subtract two items at a time from total sum.

```
const subset = [15, 5, 20, 10, 35];

const findInterval = (subset) => {
  const sum = subset.reduce((a, b) => {
    return a += b;
  }, 0);

  for(let i = 0; i< subset.length; i++){
    for(let j = i + 1; j < subset.length; j++){
      if(subset[i] + subset[j] === (sum - (subset[i] + subset[j]))){
        return true;
      }
    }
  }
  return false;
}
findInterval(subset);
```

