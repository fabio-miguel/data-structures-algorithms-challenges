
function reverseString2(input) {
    const stringArray = stringToArray(input);
    const halfArrayLength = Math.floor(input.length / 2);

    for (let i = 0; i < halfArrayLength; i++) {
        const leftSideIndex = i;
        const rightSideIndex = stringArray.length - i - 1;

        swap(leftSideIndex, rightSideIndex, stringArray)
    }

    return stringArray.join("");
}

function swap(source, target, array) {
    temp = array[source];
    array[source] = array[target];
    array[target] = temp;
}

function stringToArray(string) {
    const stringArray = new Array(string.length);
    for (let i = 0; i < stringArray.length; i++) {
        stringArray[i] = string[i];
    }

    return stringArray;
}

module.exports = { reverseString2 };