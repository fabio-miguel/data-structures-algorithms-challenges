class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++
    }

    pop() {
        let removed = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return removed; 
    }

    delete(index) {
        // get item
        const item = this.data[index];
        // call shiftItems() method
        this.shiftItems(index);
    }

    shiftItems(index) {
        // loop through array
        for (let i = index; i < this.length -1; i++) {
            // make the item in index i now be the item in index i + 1
            // we are shifting the item to the left
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}

const newArray = new MyArray();
newArray.push('a');
newArray.push('b');
newArray.push('c');
console.log(newArray);
newArray.pop();
console.log(newArray);

