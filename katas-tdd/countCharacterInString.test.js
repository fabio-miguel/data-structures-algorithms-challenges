const {countCharacter} = require("./countCharacterInString")

describe("occurrences of a character in a string", () => {
    it("should return a count of 0 when given an empty string", () => {
        expect(countCharacter("", "a")).toBe(0)
    })
})