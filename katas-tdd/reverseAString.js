
function reverseString(input) {
    const stringArray = stringToArray(input);
    const halfArrayLength = Math.floor(input.length / 2);

    for (let i = 0; i < halfArrayLength; i++) {
        const leftSideIndex = i;
        const rightSideIndex = stringArray.length - i - 1;
        swap(leftSideIndex, rightSideIndex, stringArray);
    }

    return stringArray.join("");
}

function stringToArray(input) {
    const stringArray = new Array(input.length);
    for (let i = 0; i < input.length; i++) {
        stringArray[i] = input[i];
    }
    return stringArray;
}

function swap(source, target, array) {
    const temp = array[source]; 
    array[source] = array[target]; 
    array[target] = temp; 
}

module.exports = { reverseString };

// interview: understanding how to problem solve, without the readily availble tools. 
