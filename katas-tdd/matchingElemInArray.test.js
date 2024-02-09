const {matchingElements} = require("./matchingElemInArray")

describe("match elements in an integer array", () => {
    it("should return element for a single integer array", () => {
        expect(matchingElements([1])).toBe(1);
    })
    it("should return a match if two elements match in an integer array", () => {
        expect(matchingElements([1,1])).toBe(1); 
    })
    // it("should return a match if two elements match in an integer array", () => {
    //     expect(matchingElements([1,1,2,2])).toBe(2); 
    // })

})

// What is the most efficient way to do this?
// At minimum you will have to iterate over each element to 