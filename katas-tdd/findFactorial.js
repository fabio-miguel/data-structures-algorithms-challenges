
function findFactorial(number) {
    if (number === 0) return 1;
    let result = 1

    for (let i = 2; i <= number; i++) {
        result = result * i;
    }

    return result;
}

module.exports = { findFactorial }

// Time Complexity: O(n) code is running for all the values of n (e.g. n = 5, then O(5n)).
// Space Complexity: O(1) not allocating any extra space for a variable.