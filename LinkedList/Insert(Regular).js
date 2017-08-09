function insert(head, data){
    if(head === null){
        head = new Node(data);
        head.next = null;
    } else{
        if(head.next === null){
            head.next = new Node(data);
        } else {
            insert(head.next, data);
        }
    }
    return head;
}
