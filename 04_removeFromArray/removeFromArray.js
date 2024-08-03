const removeFromArray = function(array, ...values) {
    for (const value of values) {
        for (let i = 0; i < array.length; array[i] === value ? i : ++i){
            if (array[i] === value){
                array.splice(i, 1);
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
