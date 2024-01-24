
function isPalindrome(input) {
    if (typeof input !== "string") {
        return "must input a string";
    } 

    const lowercase = input.toLowerCase();
    const reversed = input.split("").reverse().join("").toLowerCase();

    if (reversed === lowercase) {
        return true;
    } else {
        return false;
    }
}

module.exports = { isPalindrome };
