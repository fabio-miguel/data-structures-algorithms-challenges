const {countCharacters} = require("./countCharactersInString");


// count of all characters in a string 
// pass in a string and function returns an object of all characters and their occurrences

describe("count all the characters in a string", () => {
    it("should return zero when given an empty string", () => {
        expect(countCharacters("")).toBe(0);
    })
    it("should return an object with character and count of one when given a single character string", () => {
        const count = {a: 1};
        expect(countCharacters("a")).toEqual(count); 
    });
    it("should return an object with two characters and count of each when given a two character string", () => {
        const count = {
            a: 1,
            b: 1, 
        };
        expect(countCharacters("ab")).toEqual(count); 
    });
})

// Before implementation:
// - Q) What's the most efficient way to implement this?
// - A) Deduction:
// --- Counting characters in a string, the minimum required is to go through the entire string because even if you miss one character, result would be wrong.
// --- So, the algorithm has to be at least O(n) time complexity because in the worst case you are looking at the whole string.
// --- Specifically, time complexity is O of length of n.
// --- So, looping through characters is likely. 
// --- Then, consider is there anything else to do / exponential after going through each character in the string? No. 
// --- Simply, assign characters in a map once and increment count. 


// - Q) What is your planned algorithm?
// - A) loop characters, assign to map increment count

// - Q) What is its space & time complexity?
// - A) O(n). Specifically O of length of n. 

// - Q) Any edge cases to consider? 

// TDD:
// - Q) What does countCharacters DO? 
// - A) It returns the count of all characters 
// - Q) Therefore, what is the simplest string?
// - A) an empty string

// - Q) What is the next simplest string?
// - A) a single character string

// - Q) What is the next simplest string?
// - A) a two character string. From here an algorithm can be built.