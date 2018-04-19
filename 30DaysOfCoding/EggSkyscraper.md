## Prompt:
```
You work in a 100 floor building and you get 2 identical eggs. 
You need to figure out the highest floor an egg can be dropped without breaking.
Find an algorithm that is minimizing number of throws in the worst-case scenario.
```
## Intuitive Answer:
Our first egg should be used to split the 100 floors range into smaller ranges as efficiently as possible.
Thus, it makes sense to throw the first egg from the 1 / nth floors to check.
For example: 1/3.

Throw the egg from the 33rd floor. If it breaks, then we check the first 32 floors using the second egg.

Worst case scenario for this solution is 33. N can be changed around to find the most optimal option.

## Perfect Solution:
We must understand the equalibrium that is used to calculate the number of throws in the worst case scenario.

 max( F<sub>n</sub>, (F<sub>2</sub> - F<sub>1</sub> - 1) + 1, (F<sub>3</sub> - F<sub>2</sub> - 1) +2, ...)

or 

D<sub>n</sub> = (f<sub>n</sub> - F<sub>n - 1</sub> - 1);
max(D<sub>1</sub>, D<sub>2</sub> + 1, D<sub>3</sub> + 2, D<sub>4</sub> + 3)....

The optimal solution is when all arugments of this max function are equal.
The last D<sub>n</sub> is going to be 1, meaning that there is only the single floor for the first egg.
However, we have two eggs! Therefore, D<sub> n - 1</sub> should be equal to 2, because it is one less throw of the first egg.

Logic Proof:
First egg: 99th floor -> (99-2 => 97) -> (97-3 => 94) -> (94-4 => 90) -> (90-5 => 85) -> (85-6 => 79) -> (79-7 => 72) -> (72-8 => 64) -> (9,55) -> (10,45) -> (11,34) -> (12,22) -> (13,9) ANSWER


```
@param {number} floorsLeft
@param {number} nextFloor
const maxThrows = (floorsLeft, nextFloor) => {
  if(floorsLeft <= 2){
    return floorsLeft;
  } else {
    return Math.max(nextFloor, bestMaxThrows(floorsLeft - nextFloor) + 1);
  }
}

const bestMaxThrows = (floorsLeft) => {
  return maxThrows(floorsLeft, bestNextStep(floorsLeft));
}

const bestNextStep = (floorsLeft) => {
  if(floorsLeft <= 2){
    return 1;
  } else {
    
  }
}

```
