// STACK


//---------------------------------------------------------------

class Stack {
    constructor() {
        // an empty object used to store elements of stack
        this.storage = {};
        // variable to keep track of no. of elements in stack
        this.size = 0;
    }

    push(element) {
        // increment size 
        this.size++
        // set a property (of size) to storage and assign it the element
        this.storage[this.size] = element;
    }

    pop() {
        // temporary variable that gets & stores the removed item
        let removed = this.storage[this.size];
        // get and remove the element with the matching prop
        delete this.storage[this.size];
        // decrement size of stack
        this.size--;

        return removed;
    }

    peek() {
        return this.storage[this.size];
    }
}

const stack = new Stack();

stack.push("dog");
stack.push("cat");
stack.push("bird");

console.log (stack);

