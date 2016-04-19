/*a function called firstChar that takes a string and a callback, 
and "returns" the first character of the string after one second.
*/
function firstChar(str, callback) {
    var first = str.charAt(0);
    setTimeout(function(){
        callback(first);
    }, 1000);
}



/*a function called lastChar that takes a string 
and "returns" the last character of the string after one second.
*/
function lastChar(str, callback) {
    var last = str.charAt(str.length -1);
    setTimeout(function(){
        callback(last);
    }, 1000);
}


/*
Create a function called getFirstAndLast that takes a string 
and "returns" the first+last character of the string. 
Your function should use firstChar and lastChar to do its work. 

*/

function getFirstAndLast(str, callback){
    firstChar(str, function(firstLetter){
        lastChar(str, function(lastLetter){
            callback(firstLetter + lastLetter);
        });
    });
}

getFirstAndLast("hello", function(result){
    console.log(result);
})
