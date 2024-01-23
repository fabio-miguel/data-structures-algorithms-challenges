// Find the factorial of any given number 

function findFactorial(number) {
    // base case
    if (number === 2) {
        return 2;
    }
    
    return number * findFactorial(number-1)
}


console.log(findFactorial(5))

