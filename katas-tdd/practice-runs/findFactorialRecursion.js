
function findFactorial(number) {
    if (number === 1) {
        return 1;
    }
    
    return number * findFactorial(number - 1); 
}

module.exports = { findFactorial }


/*
UNDERSTANDING RECURSION:

Example - findFactorial(5)

The return in line 7 cannot be evaluated because it needs to findFactorial(number-1) first! 
The runtime is essentially saying, "5 times... and now I need to figure out this recursive call." So, this is paused!
Needs to figure out this recursive call first. 
    - So in the stack you will now have 5 * coming soon.
In the new frame, the number 4 which is multiplied by, "oh I need to figure this recursive call out." So, this is paused!
    - So in the stack you will now have 4 * coming soon.
In the new frame, the number is 3 which is multiplied by, "oh I need to figure this recursiv call out." So, this is paused!
    - So in the stack you will have 3 * coming soon. 
In the new frame, the number is 2 which is multiplied by, "oh I need to figure this recursive call out." So, this is paused!
    - So in the stack you will have 2 * coming soon.
In the new frame, the number is 1 which meets the base case and returns 1. No more recursive calls and time to address the STACK.
*/

/* 
findFactorial(5)

- return 5 * findFactorial(4)
    - return 4 * findFactorial(3)
        - return 3 * findFactorial(2)
            - return 2 * findFactotial(1)
                - return 1 
*/

/* 
- return 5 * 24
    - return 4 * 6
        - return 3 * 2
            - return 2 * 1
                - return 1
*/