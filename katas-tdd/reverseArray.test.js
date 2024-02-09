const { reverseArray } = require("./reverseArray")

describe("reverse an array", () => {
    it("should return array when given an empty array", () => {
        expect(reverseArray([])).toEqual([]);
    })
    it("should return array when given an empty array", () => {
        expect(reverseArray(["a"])).toEqual(["a"]);
    })
    it("should return reversed when given an array of items", () => {
        expect(reverseArray(["a", "b"])).toEqual(["b", "a"]);
    })
})