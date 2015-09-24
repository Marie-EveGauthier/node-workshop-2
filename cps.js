var word = "hello";
function firstChar(word, callback) {
    callback(word[0]);
}

//Testing
 function test(aString) {
     console.log(aString);
 }
 
firstChar(word, test);



function lastChar(word, callback) {
    callback(word[word.length - 1]);
}

//Testing
lastChar(word,test);


function getFirstAndLast(myString, callback) {
    firstChar(myString, function(firstLetter) {
        lastChar(myString, function(lastLetter) {
           callback(firstLetter + lastLetter); 
        });
    });
}

getFirstAndLast("hello", function(newStr) {
    console.log(newStr);
});