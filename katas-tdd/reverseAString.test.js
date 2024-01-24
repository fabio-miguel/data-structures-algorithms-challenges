const {reverseString} = require("./reverseAString")

describe("reverse a string", () => {
    it("should return an empty string when input is an empty string", () => {
      expect(reverseString("")).toBe("");
    })
    it("should return input when input is length of one", () => {
      expect(reverseString("i")).toBe("i"); 
    })
    it("should return a reversed string when length of string is two", () => {
      expect(reverseString("it")).toBe("ti");
    })
    it("should return a reversed string when length of string is three", () => {
      expect(reverseString("abc")).toBe("cba"); 
    })
    it("should return a reversed string when length of string is four", () => {
      expect(reverseString("abcd")).toBe("dcba");
    })
  });

// GIVEN a context WHEN something happens, THEN your result (given, when then)
// mocking - research
// types of tests - unit, integration, acceptance