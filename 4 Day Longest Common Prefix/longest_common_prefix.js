/*
Longest Common Prefix
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lower-case English letters.
*/
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if(strs.length == 1 ){
        return strs[0];
    }
    else if(strs.length <= 1 || strs[0] ==""){
        return ""
    }
    else{
    var result = new Map();
    var status = false;
    var addPreviousLetter = "";
    var mapAsc;
    for (let index = 0; index < strs[0].length; index++){
        var item = strs[index];
    result.clear();
    var currentWord = item.split("");
    var count = 0;
    status = false;
    for (let i = index + 1; i < strs.length; i++) {
        var remaningWords = strs[i].split("");
        if (result.has(addPreviousLetter + currentWord[index])) {
            count = result.get(addPreviousLetter + currentWord[index]) + 1;
            result.set(addPreviousLetter + currentWord[index], count)
            status = true;
        }
        else if (addPreviousLetter + currentWord[index] == addPreviousLetter + remaningWords[index]) {
            result.set(addPreviousLetter + currentWord[index], count + 1)
            status = true;
        }
        else {
            status = false;
        }
    }
    if (status) {
        addPreviousLetter += currentWord[index];
    }
    else {
        return addPreviousLetter;
    }
}
    }
    
};