//Valid Parentheses.
/*Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
*/
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length <= 1 || s.length %2 !== 0) {
        return false;
    }
    var arrayStack = [];
    var map = new Map();
    map.set("(", ")");
    map.set("[", "]");
    map.set("{", "}");
    for(let i=0; i < s.length; i++){
        //Store Parantheses in Stack Array
        if(map.has(s[i])){
            arrayStack.push(s[i])
        }
        //If Parentheses Not found in the map.Check the last char inserted with Current Char.
        else if(s[i] != map.get(arrayStack.pop())){
            return false;
        }
    }
    if(arrayStack.length >=1){
        return false;
    }
    else{
        return true;
    }
    
};