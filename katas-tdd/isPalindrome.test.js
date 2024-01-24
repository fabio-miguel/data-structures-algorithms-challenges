const {isPalindrome} = require("./isPalindrome")

describe("isPalindrome", () => {
    it("should return a boolean", () => {
        expect(typeof isPalindrome("string")).toBe("boolean");
    })
    it("should return an error if input is not a string", () => {
        expect(isPalindrome(5)).toBe("must input a string");
    })
    it("should return true if string is a Palindrome", () => {
        expect(isPalindrome("Abba")).toBe(true);
    })
})