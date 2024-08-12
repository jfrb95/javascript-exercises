const fibonacci = function(num) {
    if (+num < 0) {
        return "OOPS"
    } else if (+num === 0) {
        return 0
    }
    let leftPointer = 1;
    let rightPointer = 1;
    for (let i = 2; i < +num; ++i) {
        const temp = rightPointer;
        rightPointer += leftPointer;
        leftPointer = temp;
    }
    return rightPointer
};

// Do not edit below this line
module.exports = fibonacci;
