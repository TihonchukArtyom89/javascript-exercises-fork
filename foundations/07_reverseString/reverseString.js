const reverseString = function (str) {
    let strArr = str.split(" ");
    let revStrArr = [];
    for (word of strArr) {
        let mutWord = word.split("").reverse().join("");
        revStrArr.push(mutWord);
    }

    return revStrArr.reverse().join(" ");
};

// Do not edit below this line
module.exports = reverseString;
