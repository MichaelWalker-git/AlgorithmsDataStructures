// Q: You have a list of timestamped customer deliveries from various customers. We need an algorithm that will inspect the events and determine the customers that have ever had five or more deliveries within any 30 day period. Return an array of customer uuids that satisfy this condition.
 
const THIRTY_DAYS = 30 * 24 * 60 * 60 * 1000;
 
const deliveries = [
      {
        timestamp: Date.now(),
        place: {
            uuid: 'a123'
        },
        customer: {
            uuid: '1',
            name: 'joe'
        }
    }, {
        timestamp: Date.now() - 1000,
        place: {
            uuid: 'b123'
        },
        customer: {
            uuid: '2',
            name: 'joe'
        }
    }
 
    // ... forever and in no order
]

const findVips = (deliveries) => {
  const userTable = new Map();
  const vipArr = [];
  let standardizeDates = false;
  
  deliveries.forEach((delivery) => {
    if(userTable.has(delivery.customer.uuid)){
      const previousOrders = userTable.get(delivery.customer.uuid);
      const newOrders = [...previousOrders, delivery.timestamp];
      userTable.set(delivery.customer.uuid, newOrders);
    } else {
      userTable.set(delivery.customer.uuid, [delivery.timestamp]);
    }
  });
  
  const standardizeTimes = (arrOfTime) => {
    return arrOfTime.sort((a, b) => a - b );
  }

  const findVips = ((userTable) => {
     userTable.forEach((orders, user) => {
       if(orders.length >= 5 && testFor30Days(orders)){
        vipArr.push(user);
       }
     });
  });
  
  /**
  * @param {!Array<string>}arr
  * @return {boolean}
  */
  const testFor30Days = (arr) => {
    const ordersMeetingCriteria = [];
    
    for(let i = 0; i < arr.length - 5; i++){
      ordersMeetingCriteria.push(arr[i]);
      for(let j = i + 1; j < 6; j++){
        if(new Date(arr[j]) - new Date(arr[i]) < 30){
          ordersMeetingCriteria.push(arr[j]);
        } else {
          ordersMeetingCriteria = [];
          continue;
        }        
      }
    }
    return ordersMeetingCriteria.length >= 5;
  }); 
  
  if(!standardizeDates){
     userTable.forEach((orders) => standardizeTimes(orders));
  }
  
  findVips(userTable);
  
  return vipArr;
}
// hash table / set customer.uuid, order, timestamp


// iterate through each customer's orders, 2 pointers
// first (start)
  // check if second pointer is within 30 days
    // false
      // continue (move first pointer forward)
    // true
      // consecuativeOrders.pus

// check the length of consecutive orders >= 5


// we would push this user if true to our VIP array
// return VIP array







// // Q: We have a function called makeRequest that makes an API request. We also have a function called eventHandler that is hooked up to an event (a click, for example), and right now it's a dumb handler that simply calls makeRequest.
 
// // Write a new event handler eventHandlerWithThrottling that we can hook up to the click event such that it won't call makeRequest more than once every 5 seconds.
 
// // We do not care what the API request returns (assume it's a fire-and-forgot POST)
// // Events that occur within 5 seconds of an API request are "remembered", and once the 5 second timeout is over, the latest one will be fired.
 
// function makeRequest(payload) {
//     // let's pretend this makes a request, and logs the payload/time of request
//     console.log({
//       data: payload,
//       time: new Date().getTime()
//     });
// }
 
// // non-throttled version
// const eventHandler = function(payload) {
//     makeRequest(payload);
// }
 
// let lock = false;
// let lastCall;
// // throttled version
// const eventHandlerWithThrottling = function(payload) {
//   // Your Solution
//   if(!lock){
//     makeRequest(payload);
//     lock = true;
//     setTimeout(() => {
//       lock = false;
//       if(lastCall){
//         makeRequest(lastCall);
//         lastCall = null;
//       }
//     }, 5000);
//   } else {
//     lastCall = payload;
//   }
// }

// // util function for testing
// function simulateEvent(fn, payload, timeout) {
//   setTimeout(function() {
//     fn(payload);
//   }, timeout)
// }
 
 
// // E: 'hello' (t = 0)
// // R: 'hello' (t = 0)
 
// // E: 'hello' (t = 0), 'goodbye' (t = 4)
// // R: 'hello' (t = 0), 'goodbye' (t = 5)
 
// // E: 'hello' (t = 0), 'hello again' (t = 2), 'goodbye again' (t = 4), 'hello again' (t = 7)
// // R: 'hello' (t = 0), 'goodbye again' (t = 5), 'hello again' (t = 10)
 
// // 1. 'hello' (t = 0)
// // simulateEvent(eventHandlerWithThrottling, 'hello', 0);
 
// //  2. 'hello' (t = 0), 'goodbye' (t = 5)
// // simulateEvent(eventHandlerWithThrottling, 'hello', 0);
// // simulateEvent(eventHandlerWithThrottling, 'goodbye', 4000);
 
// // 3. 'hello' (t = 0), 'goodbye again' (t = 5), 'hello again' (t = 10)
// simulateEvent(eventHandlerWithThrottling, 'hello', 0);
// simulateEvent(eventHandlerWithThrottling, 'hello again 1', 2000); // ignored
// simulateEvent(eventHandlerWithThrottling, 'goodbye again', 4000);
// simulateEvent(eventHandlerWithThrottling, 'hello again 2', 7000);
