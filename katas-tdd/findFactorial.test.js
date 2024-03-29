const {findFactorial} = require("./findFactorial")

describe("find factorial of an integer", () => {
    it("should return 1 when 0", () => {
        expect(findFactorial(0)).toBe(1);
    })
    it("should return 1 when 1", () => {
        expect(findFactorial(1)).toBe(1);
    })
    it("should return 2 when 2", () => {
        expect(findFactorial(2)).toBe(2);
    })
})