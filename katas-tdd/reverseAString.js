
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


// REFLECTION

// Interview: understanding how to problem solve, without the readily availble tools. 
// Note: there are no methods like split, reverse etc. 

// Refactoring:
// - you want this to read like English.
// - imagine 10 years from now you forget everything, but because you have made this readable you can understand it easily. 
// - extract code can make it more readable. E.g. const halfArrayLength = Math.floor(input.length / 2); 
// - reading Math.floor(input.length / 2); would take longer to understand than simply halfArrayLength. 
// - remember, for every piece of code that takes you 1 minute to write, probably takes 10 times longer to read.
// - the string is converted to an array because the string is immutable but an array of strings (stringArray) is mutable. 
// - smaller, generic functions are tucked away. They are reusable. 
// - whereas, your main function is readable.  

// -- Space Complexity:
// ---- in memory, if you keep pushing to arrays it will have to copy the array in memory at some point. 
// ---- however, if you pre-define this, which is always input.length, then you won't have to double the memory. 
// ---- so, instead of letting JS dynamically grow array by potentially creating many copies, just create it once.
// ---- then, you wont be pushing to the array, you will just pre-allocate what you need in memory.
// ---- imagine the array being size 10, and it already has 10 empty things in it. If you push to it you are then creating an 11th thing and overflowing it.
// ---- so you aren't pushing to the array you are setting to its specific index. | stringArray[i] = input[i];
// ---- O(n) - linear time

// -- Time Complexity:
// ---- O(n) - linear time 
// ---- though, this is only doing half the array length (going from outside in). 
// ---- if you were to reverse the string and then check, it would be O(2n), where this is technically O(0.5n). 
// ---- but, in terms of Big O the constants are cancelled so they're both still linear O(n). 