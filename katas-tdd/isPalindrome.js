
function isPalindrome(input) {
    for (let i = 0; i < input.length; i++) {
        const endOfArray = input.length - 1;
        if (input[i] !== input[endOfArray - i]) {
            return false;
        }
    }
    
    return true;
}

module.exports = { isPalindrome };


// abba