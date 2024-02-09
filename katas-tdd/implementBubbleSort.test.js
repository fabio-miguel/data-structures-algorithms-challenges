const {bubbleSort} = require("./implementBubbleSort")


describe("implement bubble sort to sort an array", () => {
    it("should return array when given an array with one number", () => {
        const numbers = [1];
        expect(bubbleSort(numbers)).toEqual(numbers);
    })
    it("should return a sorted array when given an array with two numbers", () => {
        const numbers = [2, 1];
        expect(bubbleSort(numbers)).toEqual([1, 2]);
    })
})


