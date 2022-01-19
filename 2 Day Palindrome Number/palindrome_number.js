/*Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.
*/
//Trick here is you Shouldn't conver to String.

//Find the Number is Plaindrome or Not.
/**
 * @param {number} x
 * @return {boolean}
 */
//Lets Say input is 12321
//By using Perdefined Methods.
 var isPalindrome = function(x) {
    var reverseVal = String(x).split("").reverse().join().replaceAll(",","");
    if(x === reverseVal){
        return true;
    }
    else{
        return false;
    }
};

var isPalindromeCheck = function(x) {
    var strVal = String(x).split("");
    var reverseStr ="";
    for(let i=strVal.length; i > 0  ;i--){
        reverseStr+=strVal[i-1];
    }
    if(String(x) === reverseStr ){
        return true;
    }
    else{
        return false;
    }
};
