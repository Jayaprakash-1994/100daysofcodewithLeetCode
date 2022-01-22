//["flower","flow","flight"]
var longestCommonPrefix = function (strs) {
    if (strs.length == 0) {
        return "";
    }
    else if (strs.length <= 1) {
        return strs[0];
    }
    else {
        var previousChar = "";
        var status = false;
        var currentWord = strs[0].split(""); //f,l,o,w,e,r
        for (let j = 0; j < currentWord.length; j++) {
            result = "";
            var currentWordChar = previousChar + currentWord[j]; //f
            for (let k = 1; k < strs.length; k++) {
                var nextWordChar = previousChar + strs[k][j]; //fl
                if (currentWordChar == nextWordChar) {
                    result = strs[k][j]; //f  
                    status = true;
                }
                else {
                    status = false;
                }
            }
            if (status != true) {
                return previousChar ;
            } 
            else{
                previousChar += result
            }
        }

        return previousChar;
    }
}