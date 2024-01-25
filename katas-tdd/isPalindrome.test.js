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