This problem was asked by Google.

The power set of a set is the set of all its subsets. Write a function that, given a set, generates its power set.

For example, given the set {1, 2, 3}, it should return {{}, {1}, {2}, {3}, {1, 2}, {1, 3}, {2, 3}, {1, 2, 3}}.

You may also use a list or array to represent a set.
Shortcut
```

const findPowerSet = (s) => {
      return s.reduce((subsets, value) => {
        return subsets.concat(
         subsets.map((set) => {
           return [value,...set]
           })
        ),[[]]
        });
}
findPowerSet(subset);
```

CORRECT

1.) If the input set is empty, return a set with an empty set in it
2.) Otherwise, take an element from our set. Let's call it x.
3.) Generate the power set of our input set without x. Let's call it result, for lack of a better name.
4.) Return the union of name with name + x

```
function* subsets(array, offset = 0) {
  while (offset < array.length) {
    let first = array[offset++];
    for (let subset of subsets(array, offset)) {
      subset.push(first);
      yield subset;
    }
  }
  yield [];
}

// Example:
for (let subset of subsets([1, 2, 3])) {
  console.log(subset); 
}

```
