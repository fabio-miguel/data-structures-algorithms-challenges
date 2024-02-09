
function sumArray(array) {
    if (array.length === 0) return 0;
    if (array.length === 1) return array[0]; 

    let sum = 0

    for (let i = 0; i < array.length; i++) {
        const number = array[i];
        sum += number;
    }

    return sum; 
}

module.exports = { sumArray };