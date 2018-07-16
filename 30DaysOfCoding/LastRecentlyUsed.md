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


Other solution:

```
class Node {
    int = function(key, val){
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class LinkedList {
    init = () => {
        # dummy nodes
        this.head = Node(None, 'head');
        this.tail = Node(None, 'tail');
        
        # set up head <-> tail
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    getHead = () => {
        return this.head.next;
    }

    getTail = () => {
        return this.tail.prev;
    }

    add = (node) => {
        prev = this.tail.prev;
        prev.next = node;
        
        node.prev = prev;
        node.next = this.tail;
        
        this.tail.prev = node;
    }

    remove = (node) => {
        prev = node.prev;
        nxt = node.next;
        
        prev.next = nxt;
        nxt.prev = prev;
    }
}

class LRUCache {
    init = (n) => {
        this.n = n;
        this.dict = {};
        this.list = LinkedList();
    }

    set = (key, val) => {
        if (this.dict.hasOwnProperty(key)){
            delete this.dict[key];
        }
        
        n = Node(key, val);
        
        this.list.add(n);
        this.dict[key] = n;
        
        if (this.dict.length > this.n) {
            head = this.list.getHead();
            this.list.remove(head);
            delete this.dict[head.key];
        }

    get = (key) => {
        if (this.dict.hasOwnProperty(key)) {
            n = this.dict[key];
            
            # bump to the back of the list by removing and adding the node
            this.list.remove(n);
            this.list.add(n);
            return n.val;
        }
    }
 }
            
    ```
