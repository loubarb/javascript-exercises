const reverseString = function(str) {
    let splitIt = str.split('');
    let rev = splitIt.reverse().join('');
    return rev
};

// Do not edit below this line
module.exports = reverseString;
