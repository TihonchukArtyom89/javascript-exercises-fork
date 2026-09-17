const removeFromArray = function (arr, val) {
    for (arg of arguments) {
        if (arg !== arr) {
            for (valArr of arr) {
                if (valArr === arg) {
                    while (arr.includes(valArr)) {
                        arr.splice(arr.indexOf(valArr), 1);
                    }
                }
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
