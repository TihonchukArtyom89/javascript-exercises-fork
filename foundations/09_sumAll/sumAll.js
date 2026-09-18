const sumAll = function (a, b) {
    if (a > 0 && b > 0 && Number.isInteger(a) && Number.isInteger(b)) {
        let arr = [];
        if (a !== b) {
            console.log(`a=${a} and b=${b}`);
            for (let i = Math.min(a, b); i < Math.max(a, b) + 1; i++) {
                arr.push(i);
            }
        } else {
            return a;
        }
        let sum = arr.reduce((acc, x) => acc + x, 0);
        return sum;
    } else return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
