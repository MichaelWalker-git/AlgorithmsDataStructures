 ```
 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if(!head || !head.next){
        return null;
    }
    let turtle = head;
    let rabbit = head.next;

    while(turtle !== rabbit){
        turtle = turtle.next;
        if(!rabbit.next || !rabbit.next.next){
            return null;
        }
        rabbit = rabbit.next.next;
    }
    rabbit = head;
    turtle = turtle.next;
    
    while(rabbit !== turtle){
        turtle = turtle.next;
        rabbit = rabbit.next;
    }
    return turtle;
};
 ```
