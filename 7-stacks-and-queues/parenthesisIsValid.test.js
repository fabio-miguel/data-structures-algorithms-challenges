const {isValid} = require("./parenthesisIsValid")

describe("ParenthesIsValid", () => {

    it("should accept an empty string as valid", () => {
        expect(isValid("")).toBe(true);
    })
    it("should accept a single pair of paranthesis as valid", () => {
        expect(isValid("()")).toBe(true);
    })
    it("should accpet multiple pairs of parenthesis as valid", () => {
        expect(isValid("() {} []")).toBe(true);
    })
})


// You are given a string of parenthesis and you have to determine if they're valid. If you're given a string parenthesis, curly braces, brackets... you can actually use a stack to determine whether all of those parenthesis close eachother in a valid way. 