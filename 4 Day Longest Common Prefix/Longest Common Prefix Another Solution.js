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
        var currentWord = strs[0].split(""); 
        for (let j = 0; j < currentWord.length; j++) {
            result = "";
            var currentWordChar = previousChar + currentWord[j]; 
            for (let k = 1; k < strs.length; k++) {
                var nextWordChar = previousChar + strs[k][j]; 
                if (currentWordChar == nextWordChar) {
                    result = strs[k][j]; 
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