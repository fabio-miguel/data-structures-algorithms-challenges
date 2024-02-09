
function reverseArray(arr) {
    const length = arr.length;
    if (length <= 1) return arr;

    const reversedArr = [];

    for (let i = length - 1; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }

    return reversedArr;
}

module.exports = { reverseArray };