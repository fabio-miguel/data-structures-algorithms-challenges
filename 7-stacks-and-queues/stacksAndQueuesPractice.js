// QUEUE

class Queue {
    constructor() {
        this.storage = {};
        this.head = 0;
        this.tail = 0;
    }

    // enqueue
    // add to end of the queue
    enqueue(element) {
        this.storage[this.tail] = element;
        this.tail++;
    }

    // dequeue
    // remove from front of queue
    dequeue() {
        let removed = this.storage[this.head];
        delete this.storage[this.head];
        this.head++;
        return removed;
    }
}

const queue = new Queue();

queue.enqueue("Apple");
queue.enqueue("Orange");
queue.enqueue("Banana");

console.log (queue);