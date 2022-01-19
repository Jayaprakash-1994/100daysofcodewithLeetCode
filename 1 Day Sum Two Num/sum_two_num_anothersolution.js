//lets say input is [2,3,4,5] and target is 8
var sumTwoNum = function(input,target){
    var result = [];
    for(let i=0;i < input.length;i++){
        var currentValue = input[i];
        for(let j= i+1;j<input.length;j++){
            if(currentValue + input[j] == target){
                  result.push(i,j);
            }
        }
    }
    return result;
    
}
console.log(sumTwoNum([3,2,4], 6));