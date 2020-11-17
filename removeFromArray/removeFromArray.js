const removeFromArray = function(array, ...optionalNums) {
    let newArray = [];
    //go through the original array using foreach
    //items is the current element in the original array  
    array.forEach((item) => {
        if (!optionalNums.includes(item)) {
            newArray.push(item); //push array[i] to the newArray
        }
    });

    return newArray;
}

module.exports = removeFromArray
