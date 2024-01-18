// QUEUE

class Queue {
    constructor() {
        this.storage = {};
        this.head = 0;
        this.tail = 0;
    }

    enqueue(element) {
        this.storage[this.tail] = element;
        this.tail++;
    }

    dequeue() {
        // assign the elem at head of storage to removed var
        let removed = this.storage[this.head]; 
        // remove elem at head 
        delete this.storage[this.head];
        this.head++;
        return removed;
    }
}

// enqueue



// dequeue