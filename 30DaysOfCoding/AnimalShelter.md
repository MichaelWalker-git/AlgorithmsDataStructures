```AnimalShelter extends Queue {
  let pound;
  let catMin;
  let dogMin;
  
  enQueue = (animal) => {
    if(!pound){
      pound = new Link(animal)
    } else {
      while(pound.next !== null){
        count++;
      }
      if(animal === dog){
        dogMin = count + 1;
      } else {
        catMin = count + 1;
      }
      pound.next = animal
    }
  }
  
  deQueueCat {
    let oldest;
    if(!catMin){ return null }
    while(count < catCount -1){
      if(count = catCount - 1){
        oldest = pound.next;
        pound = pound.next.next ? pound.next.next : null;
      } else {
        pound = pound.next; 
      }
      count++;
    }
    return oldest;
  }
  
    deQueueDog {
    let oldest;
    if(!dogMin){ return null }
    while(count < dogMin -1){
      if(count = dogMin - 1){
        oldest = pound.next;
        pound = pound.next.next ? pound.next.next : null;
      } else {
        pound = pound.next; 
      }
      count++;
    }
    return oldest;
  }
  
  deQueueAny = () => {
    if(pound.next.data === cat){
      findNext(cat);
    }
    
    if(pound.next.data === dog){
      findNext(dog);
    }
    value = pound;
    pound = pound.next;
    return value;
  }

  findNext = (target) => {
    if(pound.next === null){
      return null
    } 
    while(pound.next.data !== target){
      count++;
      pound = pound.next;
    }
    if(target === cat){
      catMin = count + 1;
    }
    if(target === dog){
      dogMin = count + 1;
    }
  }
}
```

The other approach is to maintain two different queues. When dequeuingAny(), we would peek into those two values and compare timestamps.
```
class Animal {
  let order;
  let name;
  
  class Animal = (name) = {
    this.name = name;
  } 
  
  setOrder = (ord) => {
    this.order = ord;
  }
  
  getOrder = () => this.order;
 
  setType = (ty) => {
    this.type = ty;
  }
  
  getType = () => this.type;
}

class AnimalQueue {
  const dogs = new LinkedList();
  const cats = new LinkedList();
  let order = 0;
  
  enqueue = (an) => {
    an.setOrder(order);
    order++;
    if(an.getType() === 'dog'){
      dogs.addLast(an);
    } else {
      cats.addLast(an);
    }
  }
  
  deQueueAny = () => {
    if(dogs.Size() === 0 || cats.Size() === 0){
      return (dogs.Size() === 0) ? cats.deQueue() : dogs.deQueue();
    }
  
    return (dogs.peek() > cats.peek()) ? dogs.deQueue()  : cats.deQueue();
  }
  
  deQueueDog = () => {
    return dogs.deQueue();
  }
  
  deQueueCat = () => {
    return cats.deQueue();
  }
}
```
  // We can also use the native JS library for timestamps and if there is an exact match, we randomize

