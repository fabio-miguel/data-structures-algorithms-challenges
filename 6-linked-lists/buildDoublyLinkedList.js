// DOUBLY LINKED LIST

class LinkedList {
    constructor() {
        this.head = this.tail = null;
    }

    // add to end of list / tail
    append(value) {
        // if list is empty, create node that is both head and tail
        if (!this.tail) {
            this.head = this.tail = new Node(value);
        } else {
            // capture current tail in a variable
            let oldTail = this.tail;
            // set new tail to the new value
            this.tail = new Node(value)
            // old tail to point to new tail
            oldTail.next = this.tail
            // new tail to point to old tail
            this.tail.previous = oldTail;
        }
    }

    // add to beinning of list / head
    prepend(value) {
        // if list is empty, create node that is both head and tail
        if (!this.head) {
            this.head = this.tail = new Node(value)
        } else {
            // capture current head in a variable 
            let oldHead = this.head;
            // set new head to the new value
            this.head = new Node(value);
            // old head to point to new head
            oldHead.previous = this.head;
            // new head to point to old head;
            this.head.next = oldHead;
        }
    }

    deleteHead() {
        // if list is empty
        if (!this.head) {
            return null
        } else {
            // capture value of old head to return
            let removedHead = this.head;
            // if only one node left in list 
            if (this.head === this.tail) {
                this.head = this.tail = null;
            } else {
                // set head to be the next node
                this.head = this.head.next;
                // remove previous pointer of new head node
                this.head.previous = null;
            }

            return removedHead.value;
        }
    }

    deleteTail() {
        // if tail is empty
        if (!this.tail) {
            return null;
        } else {
            // capture value of old tail to return 
            let removedTail = this.tail;
            // if only one node left in list 
            if (this.tail === this.head) {
                this.tail = this.head = null;
            } else {
                // set tail to be the previous node
                this.tail = this.tail.previous;
                // set new tail node to point to null
                this.tail.next = null;
            }

            return removedTail.value;
        }
    }

    search(value) {
        // when traversing linked list, keep track of which node we're on
        // so, start at the head when traversing the list
        let currentNode = this.head;

        while (currentNode) {
            if (currentNode.value === value) {
                return currentNode;
            }
            // if value of current node is not equal to value, move to next node 
            currentNode = currentNode.next;
        }

        // if we traverse linked list without finding value, return null
        return null
    }
}

class Node {
    constructor(value, prev, next) {
        this.value = value;
        this.previous = prev || null;
        this.next = next || null;
    }


}

let list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);

list.prepend(0);
list.prepend(-1);

// console.log(list.search(1));
// console.log(list.search(99));

list.deleteHead()
list.deleteTail()
list.deleteTail()
list.deleteHead()
list.deleteHead()

console.log(list);