class Employee {

    setEmployeeDetails(id, name, phoneNumber) {
        this.id = id;
        this.name = name;
        this.phoneNumber = phoneNumber;
    }

    getEmployeeId() {
        return this.id;
    }
    getEmployeeName() {
        return this.name;
    }
    getEmployeePhoneNumber() {
        return this.phoneNumber;
    }
}

const employee1 = new Employee();
employee1.setEmployeeDetails(1, "Fabio", 1234567890);

console.log (employee1.getEmployeeName());

// ENCAPSULATION:

// In a language like Java, what you have would be a good example of encapsulation. It's more tricky in JS because as of today it does not have visibility modifiers. In your example, you can access all fields in the class (id, name, phoneNumber). E.g: if you run ⁠console.log(employee1.id)⁠ you'll get the value. You can even change it ⁠ employee1.id = 10 ⁠. This is just one of the things with being a loosely typed language. It's one of the reasons why in large/complex projects, people lean towards TS (which enforces visibility), or a different language altogether. This is also why you see some people prefix their private variables with a _, that way if you run ⁠ employee1._id = 10 ⁠ then you know you're being naughty.

// There isn't much room for debate about encapsulation, it's hands down a good idea because it makes your code easier to reason about. Bear in mind classes were only fairly recently introduced in JS, so probably the debate is about how to achieve encapsulation.

// In most cases yes you can use the constructor to initialise everything, and where possible it's preferred because it allows for immutability. E.g if your class only exposes a full-args constructor, then once you construct it you have some guarantee that it won't change again (exposing setter methods defeats the point), which again makes the code easier to reason about/debug.

// // mymodule.js
// const thisVarIsPrivate = 10;
// export function thisFunctionIsnt(){}
// ...
// import {thisVarIsPrivate} from "mymodule.js" // Nope - won't work!

// In terms of classes, JS doesn't support visibility modifiers, so embrace it. Users can access and modify variables of your class, but why would they? If you wanna make it really clear they're not meant to be modified then prefix them with a ⁠ _ ⁠, but you can somewhat trust your users to do the right thing, Remember one of the benefits of JS is that it's super quick and easy to use, no compiler breaking your balls every minute. If someone desperately wants to access your employee ID, then let them.

// If you're gonna learn about encapsulation, it may be a good time to try your hand at TS. It's as simple as changing your file from ⁠ module.js ⁠ to ⁠ module.ts ⁠ and instead of node run ts-node (⁠ npm install -g ts-node ⁠).

// So, is it reasonable to say ‘encapsulation in JS OOP is possible but limited (for example, in classes) because of the nature of JS being a loosely typed language and lack of visual modifiers.’

// JS purists will probably argue never to use classes or OOP, but don't listen to these people. Always try your best to be pragmatic, open minded and use the best tools for the job.

// The same thing can be written 100s of ways. As long as your implementation is easy to read, understand, maintain, and is concise, you've done a good job.
