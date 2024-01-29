const {countCharacter} = require("./countCharacterInString")

describe("occurrences of a character in a string", () => {
    it("should return a count of 0 when given an empty string", () => {
        expect(countCharacter("", "a")).toBe(0);
    })
    it("should return a count of 1 when given a matching character and string of length one", () => {
        expect(countCharacter("a", "a")).toBe(1); 
    })
    it("should return a count of 2 when given a matching character and string of length two", () => {
        expect(countCharacter("aa", "a")).toBe(2); 
    })
})

