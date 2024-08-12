const findTheOldest = function(arr) {
    const currentYear = new Date().getFullYear();
    return arr.reduce((acc, curr) => {
        if ((acc.yearOfDeath ? acc.yearOfDeath : currentYear) - acc.yearOfBirth > (curr.yearOfDeath ? curr.yearOfDeath : currentYear) - curr.yearOfBirth) {
            return acc
        } else {
            return curr
        }
    })
};

// Do not edit below this line
module.exports = findTheOldest;
