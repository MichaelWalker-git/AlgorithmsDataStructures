Implement an LRU (Least Recently Used) cache. 
It should be able to be initialized with a cache size n, and contain the following methods:

set(key, value): sets key to value. If there are already n items in the cache and we are adding a new item, then it should also remove the least recently used item.
get(key): gets the value at key. If no such key exists, return null.
Each operation should run in O(1) time.

```
const LRU = (key, value) => {
  const cache = [];
  const cacheMap = new Map();
  if(cache.length === n) {
    let key = cache.pop();
    cacheMap.delete(key);
  }
  if(!cache.includes(key) || !cacheMap.has(key)){
    return null;
  }
  cache.push(key);
  cacheMap.set(key, value).
}

```
