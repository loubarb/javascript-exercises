const removeFromArray = function(arr, ...args) {
    let diff = arr.filter((x) => args.indexOf(x) === -1)
    return diff
};

// Do not edit below this line
module.exports = removeFromArray;
