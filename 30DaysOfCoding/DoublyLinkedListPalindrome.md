
Determine whether a doubly linked list is a palindrome. What if it’s singly linked?

For example, 1 -> 4 -> 3 -> 4 -> 1 returns true while 1 -> 4 returns false.

```
 function ListNode(val) {
      this.val = val;
      this.next = null;
}

const head = new ListNode('a');
head.next = new ListNode('b');
head.next.next = new ListNode('b');
head.next.next.next = new ListNode('a');

const getValues = (linkedList) => {
   let values = '';
   while(linkedList){
      values += linkedList.val;
      linkedList = linkedList.next;
   }
   return values;
}

const linkedListPalindrome = (linkedList) => {
   let firstRun = getValues(linkedList);
  
   return firstRun === firstRun.split('').reverse().join('');
}


console.log(linkedListPalindrome(head));
```
