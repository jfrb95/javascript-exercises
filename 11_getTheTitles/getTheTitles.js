const getTheTitles = function(arr) {
    return arr.reduce((acc, curr) => {
        return [...acc, curr.title]
    }, [])
};

// Do not edit below this line
module.exports = getTheTitles;
