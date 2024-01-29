import {Shape, Square, Circle} from "./inheritance"

// the area of a shape 
// a shape is something that can return an area 
// a couple implementations. One a square and one a circle 
// a shape can also return its name

describe("the area of a shape", () => {
    it("should return the area for a square", () => {
        const square: Shape = new Square(4, 4); 
        expect(square.area()).toBe(16);
    })
    it("should return the area for a circle", () => {
        const circle: Shape = new Circle(2); 
        expect(circle.area()).toBe(12.57);
    })
    it("should return the name for a circle", () => {
        const circle: Shape = new Circle(2); 
        expect(circle.getName()).toBe("I am a Circle");
    })
})

// - TypeScript initially infers that const square is type of square. I override the type to Shape. 
// - And, this compiles because square is an implementation of a shape.
// - So, it's happy to say, "a shape is a new square."
// - This means if you had a bunch of extra methods on a square, you wouldn't be able to access them because it is a type of shape. 
