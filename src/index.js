module.exports = function toReadable(number) {
    let ones = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        0: "zero",
    };
    let tens = {
        1: "ten",
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    };
    let elevenToTwenty = {
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
    };
    let hundreds = {
        1: "one hundred",
        2: "two hundred",
        3: "three hundred",
        4: "four hundred",
        5: "five hundred",
        6: "six hundred",
        7: "seven hundred",
        8: "eight hundred",
        9: "nine hundred",
    };
    let numbToArray = Array.from(String(number));
    let elevenToTwentyCheck = Number(numbToArray[0] + numbToArray[1]);
    let numberResult = [];
    let numbLength = String(number).length;

    if (numbLength === 1) {
        return ones[number];
    }
    if (numbLength === 2) {
        if (numbToArray[1] === "0") {
            numberResult.push(tens[numbToArray[0]]);
            return numberResult.join(" ");
        }
        if (elevenToTwentyCheck >= 11 && elevenToTwentyCheck <= 19) {
            numberResult.push(elevenToTwenty[elevenToTwentyCheck]);
            return numberResult.join(" ");
        }
        numberResult.push(tens[numbToArray[0]]);
        numberResult.push(ones[numbToArray[1]]);
        return numberResult.join(" ");
    }
    if (numbLength === 3) {
        numberResult.push(hundreds[numbToArray[0]]);
        if (Number(numbToArray[1]) + Number(numbToArray[2]) === 0) {
            console.log(true);
            return numberResult.join(" ").trimEnd();
        }
        if (
            Number(numbToArray[1] + numbToArray[2] >= 11) &&
            Number(numbToArray[1] + numbToArray[2] <= 19)
        ) {
            numberResult.push(
                elevenToTwenty[Number(numbToArray[1] + numbToArray[2])]
            );
            return numberResult.join(" ");
        }
        numberResult.push(tens[numbToArray[1]]);
        if (numbToArray[2] === "0") {
            return numberResult.join(" ");
        }
        numberResult.push(ones[numbToArray[2]]);
        return numberResult.join(" ").replace(/ {1,}/g, " ");
    }
};
