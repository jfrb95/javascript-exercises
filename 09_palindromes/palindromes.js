const palindromes = function (str) {
    const acceptedCharacters = "0123456789abcdefghijklmnopqrstuvwxyz";
    const strippedStr = str.toLowerCase().split("").filter((element) => {
        return acceptedCharacters.includes(element)
    })
    .join("");

    let leftPointer = 0;
    let rightPointer = strippedStr.length - 1;
    while (leftPointer < rightPointer) {
        if (strippedStr[leftPointer] !== strippedStr[rightPointer]) {
            return false
        }
        leftPointer += 1;
        rightPointer -= 1;
    }

    return true
};

// Do not edit below this line
module.exports = palindromes;
