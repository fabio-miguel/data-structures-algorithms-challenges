
function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;

    // convert strings to array
    const str1Arr = str1.split("");
    const str2Arr = str2.split("");

    // sort array of string characters
    str1Arr.sort();
    str2Arr.sort();

    // compare characters in each sorted array
    for (let i = 0; i < str1Arr.length; i++) {
       if (str1Arr[i] !== str2Arr[i]) {
        return false
       }
    }

    return true;
}

module.exports = { isAnagram }