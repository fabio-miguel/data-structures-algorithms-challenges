const { findFactorial } = require("./findFactorialRecursion")

describe("find factorial of an integer", () => {
    it("should return 1 when 1", () => {
        expect(findFactorial(1)).toBe(1);
    })
    it("should return 2 when 2", () => {
        expect(findFactorial(2)).toBe(2);
    })
})


// - Q) What does findFactorial DO? 
// - A) It returns a factorial
// - Q) Therefore, what is the simplest factorial?
// - A) 0? Perhaps 1?