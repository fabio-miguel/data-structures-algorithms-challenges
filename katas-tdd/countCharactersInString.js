
function countCharacters(string) {
    if (string === "") return 0;

    const charCountMap = new Map()

    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        const count = charCountMap.get(char);
        charCountMap.set(char, (count ?? 0 ) + 1);
    }

    return Object.fromEntries(charCountMap);
}

module.exports = { countCharacters }

// - If the value on the left side of ?? is specifically undefined, the expression evaluates to the value on the right side of ?? (in this case, 0). 
// - If the value on the left is truthy, the expression evaluates to the value on the left.
