
function matchingElements(array) {
    if (array.length === 1) return array[0];

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; array.length; j++) {
            if (array[i] === array[j]) {
                console.log(array[i])
                return array[i];
            }
        }
    }
}

module.exports = { matchingElements }

// This just re