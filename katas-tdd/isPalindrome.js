
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


// REFLECTION

// - Inititally, I thought this was similar to the reverseAString.js kata where I would have to reverse a string and then compare. 
// - However, is it necessary to reverse a string to tell if it's a Palindrom? And, is it more effecient to reverse a string?
// - When looking at a string of "abba", we can tell that it's a palindrom without reversing the string.
// - We can tell by seeing that the first and last letters are the same and the next two in are the same etc. 
// - So, design considered was using a charAt(index) to check if the first and last are the same and the inwards and so on. 
// - Then, you consider that this would consider one loop up to half the length. 
// - Comparatively, reversing the string would loop the whole length and then compare with original string (which is also entire length).
// - And, there is no need to modify anything in memory, which is even faster. 
// - Though, we could loop half of the string when reverseing, which would be 0.5n
// - But, in the worst case, if the last character didn't match, you would still have to go through the entire list. **********
// - Above all this, the crucial point is that writing TO memory is more expensive than READING from memory. 

// - Note: Sometimes there can be a trade off if the solution is less efficient, but the alternative is too complicated. However this isn't the case for this solution.
