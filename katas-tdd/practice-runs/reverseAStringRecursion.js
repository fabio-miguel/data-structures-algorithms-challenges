
function reverseString(string) {
    if (string === "") {
        return string; 
    }

    return reverseString(string.slice(1)) + string[0];
}

module.exports = { reverseString }

/*
reverseString("fabio")

    - return reverseString("abio") + f
        - return reverseString("bio") + a
            - return reverseString("io") + b
                - return reverseString("o") + i
                    - return reverseString("") + o
                        return ""
*/

/*
    - return "" + "o";      // "o"
        - return "o" + "i";     // "oi"
            - return "io" + b;      // "oib"
                - return "oib" + "a";       // "oiba"
                    - return "oiba" + "f"       // "oibaf"
*/

// BIG O:
// --- The minimum required is to go through the entire string because even if you miss one character, result would be wrong.
// --- So, the algorithm has to be at least O(n) time complexity because in the worst case you are looking at the whole string.
// --- Specifically, time complexity is O of length of n.
// --- Then, consider is there anything else to do / exponential after going through each character in the string? No. 
// --- Recursion will allocate a new frame, which gets stacked ontop of the current frame. It has its own memory. 
// --- Note: A frame is a small space that the runtime makes for the function to run in. It has its own context, functions etc.
// --- Space complexity is also linear / O(n^2)
// --- Specifically, space complexity is O of length of n.
// --- Slice means you have to allocate a copy of a string character in memory per frame.