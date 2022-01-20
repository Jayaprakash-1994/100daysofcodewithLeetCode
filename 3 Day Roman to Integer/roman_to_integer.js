//Roman to Integer.
/*Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer. */
/**
 * @param {string} s
 * @return {number}
 */
//Lets Say RaomanInt is LVIII
var romanToInt = function (s) {
    var strArray = s.split("");
    const romanLetters = new Map();
    romanLetters.set("I", 1);
    romanLetters.set("V", 5);
    romanLetters.set("X", 10);
    romanLetters.set("L", 50);
    romanLetters.set("C", 100);
    romanLetters.set("D", 500);
    romanLetters.set("M", 1000);
    var result = 0;
    for (let index = 0; index < strArray.length; index++) {
        if ((strArray[index] === "I") && strArray[index + 1] !== undefined) {
            if (strArray[index + 1] === "V" || strArray[index + 1] === "X") {
                result += romanLetters.get(strArray[index + 1]) - 1;
                index++;
                continue;
            }
        }
        else if((strArray[index] === "X") && strArray[index + 1] !== undefined) {
            if (strArray[index + 1] === "L" || strArray[index + 1] === "C") {
                result += romanLetters.get(strArray[index + 1]) - 10;
                index++;
                continue;
            }
        }
        else if((strArray[index] === "C") && strArray[index + 1] !== undefined) {
            if (strArray[index + 1] === "D" || strArray[index + 1] === "M") {
                result += romanLetters.get(strArray[index + 1]) - 100;
                index++;
                continue;
            }
        }
        result += parseInt(romanLetters.get(strArray[index]));
    }
    return result;
};