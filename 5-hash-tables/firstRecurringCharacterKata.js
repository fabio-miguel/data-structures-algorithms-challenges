// Given an array = [2,5,1,2,3,5,1,2,4]
// It should return 2

// Given an array = [2,1,1,2,3,5,1,2,4]
// It should return 1

// Given an array = [2,3,4,5]
// It should return undefined

// -------------------------------------------------------------------

//METHOD1 - O(n^2) - Arrays

function firstRecurringCharacter(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return arr[i];
            }
        }
    }
    return undefined;
}

// console.log(firstRecurringCharacter([2,1,1,2,3,5,1,2,4]));
// Returns 2, which is incorrect. 

// -------------------------------------------------------------------

//METHOD2 - O(n) - Hash Table

function firstRecurringCharacter2(arr) {
    let map = {};

    for (let i = 0; i < arr.length; i++) {
        // if the current element arr[i] already exists as a key in the map object 
        // if it does, the element has been encountered before
        if (map[arr[i]] !== undefined) {
            // function returns the recurring character arr[i].
            return arr[i];
        } else {
            // add the current element (arr[i]) as a key to the map object
            // and the corresponding value is set to the current index (i).
            // hash table keeps track of the elements encountered and their indices.
            map[arr[i]] = i;
        }
    }
    return undefined;
}

console.log(firstRecurringCharacter([2,1,1,2,3,5,1,2,4]));