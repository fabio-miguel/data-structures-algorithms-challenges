const {isAnagram} = require("./isAnagram")

describe("is string anagram", () => {
    it("should return true when given the same string", () => {
        expect(isAnagram("", "")).toBe(true);
    })
    it("should return false when the strings are not the same length", () => {
        expect(isAnagram("silent", "listener")).toBe(false);
    })
    it("should return true when strings are anagrams", () => {
        expect(isAnagram("silent", "listen")).toBe(true);
    })
})