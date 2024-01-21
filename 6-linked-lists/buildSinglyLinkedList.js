// SINGLY LINKED LIST

// 10 --> 5 ---> 16

let myLinkedList = {
    head: {
        value: 10,
        next: {
            value: 5,
            next: {
                value: 16,
                next: null
            }
        }
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null; 
    }
}

class LinkedList {
    // create the first linked list node - i.e. head
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    
    append(value) {
        const newNode = new Node(value)

        // grab pointer of tail and point to newNode
        // this creates a reference to the new node 
        this.tail.next = newNode;

        // now make the actual tail as the new newNode
        this.tail = newNode; 

        // increment linked list length
        this.length++;

        return this;
    }

    prepend(value) {
        const newNode = new Node(value)

        // create a reference / pointer for next node 
        newNode.next = this.head;
        // assign the head as the newNode 
        this.head = newNode;
        this.length++;
        return this;
    }

    printList() {
        const array = []
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value)
            currentNode = currentNode.next;
        }
        return array;
    }

    insert(index, value) {
        const newNode = new Node(index, value)

        for (let i = 0; i < )

    }
}


const myLinkedList1 = new LinkedList(10);


myLinkedList1.append(16); 
myLinkedList1.prepend(3)
console.log(myLinkedList1.printList());