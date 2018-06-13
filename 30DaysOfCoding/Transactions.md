```
class TransactionParent extends TransactionMethods {
  /*
  * @type {HashTable}
  */
  hash = new Map();
  
}


class TransactionMethods {
  /**
  * @type {Stack}
  */
  lastActions_ = [];
  
  /*
  * Gets either null or the value
  * @param {string} key
  * @return {number | null}
  */
  get = (key) = {
    hash.get(key);
  }
    
  /*
  * Stores previous values if it exists into last actions, or the delete actions. Then it sets the key value pair.
  * @param {string} key
  * @param {number} value
  */
  set = (key, value) = {
    if(hash.has(key)){
      lastActions.push((hash.set(key, hash.get(key)));
    } else {
      lastActions.push(hash.unset(key));
    }
    hash.set(key, value);
  }
  
  /*
  * Stores current value, and then deletes key-value pair.
  * @param {string} key
  */
  unset = (key) = {
    lastActions.push((hash.set(key, hash.get(key)));
    hash.delete(key);
  }
      
  /*
  * Gets either null or the value
  * @param {string} key
  */
  begin = () = {
    new TransactionMethods();
  }
    
  /*
  * Gets either null or the value
  * @param {string} key
  */
  commit = () = {
    lastActions = [];
    // close the class
  }
    
  /*
  * Undo every action to the last begin statement
  */
  rollback = () = {
    lastActions.forEach((action) => action());
    lastActions = [];
  }
}

```
