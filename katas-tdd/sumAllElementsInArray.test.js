const {sumArray} = require("./sumAllElementsInArray")

describe("sum all elements in an array", () => {
    it("should return 0 when given an empty array", () => {
        expect(sumArray([])).toBe(0);
    })
    it("should return the number when given an array of one integer", () => {
        expect(sumArray([1])).toBe(1);
    })
    it("should return the sum of two numbers when given an array of two integers", () => {
        expect(sumArray([1,2])).toBe(3);
    })
})

// Before implementation:
// - Q) What's the most efficient way to implement this?
// - A) Deduction:
// --- At the minimum you will have to loop through entire array O(n)
// --- 

// - Q) What is your planned algorithm?
// - A) Loop through elements and add each elem to sum variable.
// - A) Alternative is to use reducer method.

// - Q) What is its space & time complexity?
// - A) O(n)

// - Q) Any edge cases to consider? 
// - A) Examples: only accepts numbers, handles decimals etc 