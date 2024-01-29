export interface Shape {
    area(): number;
    getName(): string;
}

abstract class NamedShape implements Shape {
    constructor(private name: string) {
    }

    getName(): string {
        return this.name;
    }

    abstract area(): number;
}

export class Square extends NamedShape {
    constructor(private readonly width: number, private readonly height: number) {
        super("I am a Square")
    }

    area(): number {
        return this.width * this.height;
    } 
}

export class Circle extends NamedShape {
    constructor(private readonly radius: number) {
        super("I am a Circle")
    }

    area(): number {
        return Number((Math.PI * this.radius * this.radius).toFixed(2));
    }
}

// WHAT IS AN INTERFACE?
// - An interface defines a contract. 
// - You can create an interface for a shape and in the interface you have a method that is called area, which returns type number.
// - You can't actually do anything with that interface but you can implement that interface!
// - So, you can create a class (e.g. sqaure), which implements a shape. How do you implement the shape?
// - Well, to fill out the shape, you need to implement EVERYTHING the contract specifies!
// - So, if the interface outlines that you need a method (e.g. area), then your class (e.g. square) MUST implement that otherwise won't compile. 
// - So, in your program, you can have a list of shapes, under the hood those lists can be squares, circles etc and you can call area on all of them. 

// Explanation2:
// Imagine you have a class called square with an area method. And, you have a class called circle and it has an area method. 
// If you don't care what type of shape it is and you're only interested in getting the area. It would be annoying that that they're seperate. 
// Ideally, you have a list of shapes you get the area from, not a list of circles or a list of squares. 
// Now, because the square and circle classes don't extend from anything, their return type of the area can be different or inputs can be different...
// So, it's better to define it once somewehere that "all shapes must have an area and that method looks like this."
// Then, the compiler says "hey square, if you're trying to be a shape, you can't return an area like that, you must do it this way"

// **The shape interface doesn't implement the area method. It defines the contract for implementing the area method.**//
// Being able to control your contract from one place and letting it cascade is really powerful.


/* 
export class Circle implements Shape {
    private name: string;

    constructor(private readonly radius: number) {
        this.name = "I am a Circle"
    }

    area(): number {
        return Number((Math.PI * this.radius * this.radius).toFixed(2));
    }

    getName(): string {
        return this.name;
    }
}

Note: in code, this was changed to extend from NamedShape abstract class to avoid repeating getName() method in each indivdual shape class. 
*/

// A sqaure is constructed with a width and a height, so that's what will be passed in to the square's constructor. 

// Visibility Modifiers: 
// - Usually, you want to expose as little as possible (ENCAPSULATION). 
// - In you test call, if you were given a variable with type square, you could look into its width and height without using the PRIVATE visibility modifier in the constructor. 
// - So, private key word encapsulates the variables, which means it cannot be viewed outside of its class. 
// - READONLY means its constant! That means you cannot change it anywhere else in the class. You can't go this.width = 10. Compiler will complain. 
// QUESTION, if you give the variable square type shape, which is the case, would that technically be encapsulation and hide the sqaure's constructor variables?

