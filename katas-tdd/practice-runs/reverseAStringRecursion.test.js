const {reverseString} = require("./reverseAStringRecursion")

describe("reverse a string", () => {
    it("should return an empty string when input of empty string", () => {
        expect(reverseString("")).toBe("");
    })
    it("should return a reversed string when the input length of a string is 2", () => {
        expect(reverseString("ab")).toBe("ba");
    })
})

