// Given a string of "Fabio"
// It should return "oibaF"

// -------------------------------------------------------------------
// Note: An optimised version of this kata has been completed (using TDD)
//       This can be found in the katas-tdd folder
// -------------------------------------------------------------------

// METHOD1

function reverse (str) {
    // check input
    // you can't always just assume that the user will input a string.
    // if no string OR just one letter OR type is not string 
    if (!str || str.length < 2 || typeof str !== "string") {
        return "that's not good";
    }

    // convert str into an array

    const backwardsArr = [];
    // assign length to avoid repeated code
    const totalItems = str.length - 1; 
    // loop through str starting at end
    for (let i = totalItems; i >= 0; i--) {
        // push items into new arr
        backwardsArr.push(str[i]);
    }

    return backwardsArr.toString();
}

console.log(reverse('Fabio'));

// -------------------------------------------------------------------

// METHOD2

function reverse2(str) {
    return str.split('').reverse().join('')
}
// - Convert str to arr using split() and use arr reverse method and join back to string

// -------------------------------------------------------------------

// METHOD3

const reverse3 = str => [...str].reverse().toString();