// @param {number} page
// getPaginatedResult(page);

//Returns: 
```
[
  {
    "value": "test0",
    "children": [
      {
        "value": "test1",
        "children": []
      },
      {
        "value": "test3",
        "children": []
      }
    ]
  },
  {
    "value": "test4",
    "children": []
  }
]
```

### Build this function: 
```
// @param {number} pageRangeFrom
// @param {number} pageRangeTo
// @return {!Array<{value: string}>}
function getValueList(pageRangeFrom, pageRangeTo) {
  // calls getPaginaedResult() on each number from 'From' to 'To'
  // returns all api calls
  // recursively search all the values in the apiResponse
  // return formattedResults in an array
}

```

```
const createNumRange = (start, end, nums = []) => {
  for(let i = start; i <= start; i++){
    nums.push(i);
  }
  return nums;
};

const recursivelySearchAndFind = (objInstance) => {
  result.push(objInstance.value)
  if(objInstance.children.length){
    result.concat(objInstance.children.map((child) => recursivelySearchAndFind(child)));
  } else {
    return objInstance.value;
  }
}

const getValueList = (pageRangeFrom, pageRangeTo) => {
  const pages = createNumRange(pageRangeFrom, pageRangeTo);
  
  return Promise.all(getPaginaedResult.call(pages)).then((apiResponses) => {
    const flattenedApiArray =  apiResponses.reduce((a,b) => [...a, ...b], []);
    const results = [];
    flattenedApiArray.forEach((objInstance) => {
      recursivelySearchAndFind(objInstance);
    });
    return results;
  })
}

```

