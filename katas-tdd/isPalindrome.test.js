const {isPalindrome} = require("./isPalindrome")

describe("isPalindrome", () => {
    it("should return true when given an empty string", () => {
        expect(isPalindrome("")).toBe(true); 
    })
    it("should return false when not given palindrome of two characters", () => {
        expect(isPalindrome("ab")).toBe(false); 
    })
    it("should return false when not given palindrome of four characters", () => {
        expect(isPalindrome("abca")).toBe(false);
    })
})

// REFLECTION

// - What does isPalindrome DO not what it generally returns!
// - When does it return something!
// - When considering the first test case, question asked is, "what is the simplest palindrome?"
// - General template for tests, "SHOULD do x WHEN y"
// - Remember, it's not just about implementation, but building up the tests! Once tested, should have confidence to not break test!