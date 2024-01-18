function employeeDetails(name, age, baseSalary) {
    this.name = name;
    this.age = age; 
    this.baseSalary = baseSalary

    const monthlyBonus = 1000; 

    const calculateFinalSalary = function() {
        const finalSalary = baseSalary + monthlyBonus;
        console.log(`Final Salary is: £${finalSalary}`);
    }

    this.getEmloyeeDetails = function() {
        console.log(`Name: ${name} | Age: ${age}`);
        calculateFinalSalary();
    }
}

const employee1 = new employeeDetails("Fabio", 31, 2000);
employee1.getEmloyeeDetails();

// ABSTRACTION:
// Note, this is a constructor function
// Notice how calculateFinalSalary (the implentation details) is hidden
// Only exposing the functionality needed by the user (only what's required!)
// Users cannot access this variable as it's function scoped

// Example:
// Imagine variable monthly bonus wasn't defined & instead this.monthlyBonus
// Users could access this & change this! e.g. employee1.monthlybonus = 10000
// Also, imagine calculateFinalSalary wasn't a variable but instead a method
// Now, this method would be exposed to the user e.g. employee1.calculateFinalSalary
// The user doesn't need access to the implementation! 
// They ONLY need access to what is required, which is to get employee details. 