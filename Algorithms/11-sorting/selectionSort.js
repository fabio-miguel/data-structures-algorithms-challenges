const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
    const length = array.length;
    //loop through entire array
    for (let i = 0; i < length; i++) {
        let min = i; //10
        let temp = array[i];

        for (let j = i + 1; j < length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }

        array[i] = array[min];
        array[min] = temp;
    }

    return array;
}

selectionSort(numbers);
console.log(numbers)


