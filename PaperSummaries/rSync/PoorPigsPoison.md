There are 1000 buckets, one and only one of them contains poison, the rest are filled with water. They all look the same. If a pig drinks that poison it will die within 15 minutes. What is the minimum amount of pigs you need to figure out which bucket contains the poison within one hour.

Answer this question, and write an algorithm for the follow-up general case.

## Follow-up:

If there are n buckets and a pig drinking poison will die within m minutes, how many pigs (x) you need to figure out the "poison" bucket within p minutes? There is exact one bucket with poison.

# Explanation

Parameters:
Guarantee that the poison kills at exactly the 15 minute mark
2 pigs
25 buckets

We can visualize the buckets in a 5 x 5 matrix:

```
 1  2  3  4  5
 6  7  8  9 10
11 12 13 14 15
16 17 18 19 20
21 22 23 24 25
```

We will have the first pig to eat from 1 -> 5, *wait 15 min*, 6 -> 10, *wait 15 min*, 11 -> 15, *wait 15 min*, 16 -> 20,
We will have the second pig to eat from 1 -> 21, *wait 15 min*, 2 -> 22, *wait 15 min*, 3 -> 23, *wait 15 min*, 4 -> 24,

If pig one dies in the first round (0), and the second pig dies in round 3 (2), we know that the poison is at (0, 2);
If none of the pigs die, then we know that the poison is at (5, 5)

To do this for 100 buckets, we can repeat this matrix 4 times. (25 buckets * (60 minutes / 15 minutes))

#Algorithm:
```
/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
const poorPigs = (buckets, minutesToDie, minutesToTest) => {
  let pigs = 0;
   while((minutesToTest/ minutesToDie + 1) ** pigs < buckets) {
     pigs += 1;
   }
  return pigs;
};
```
