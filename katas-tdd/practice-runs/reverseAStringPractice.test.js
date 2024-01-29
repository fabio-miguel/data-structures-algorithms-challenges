const {reverseString2} = require("./reverseAStringPractice")

describe("reverse a string ", () => {
    it("should return an empty string when input is an empty string", () => {
        expect(reverseString2("")).toBe("");
    })
    it("should return the input when the input is a string of one character", () => {
        expect(reverseString2("a")).toBe("a");
    })
    it("should return a reversed string when the input length of a string is 2", () => {
        expect(reverseString2("ab")).toBe("ba");
    })
    it("should return a reversed string when the input length of a string is 3", () => {
        expect(reverseString2("abc")).toBe("cba"); 
    })
    it("should return a reversed string when the input length of a string is 4", () => {
        expect(reverseString2("abcd")).toBe("dcba");
    })
})