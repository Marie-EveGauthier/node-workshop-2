/*
 -create and export a constructor function called SynonymAPI. 
 It takes an api key as parameter and sets it on the new object

-In the prototype of SynonymAPI, add a function getSynonyms.
It takes a word and a callback. 
It makes a request to the web api and gives back the results as an object to the callback function.

-If there was an error, it should be passed down to the callback
*/

//Module requirements
var request = require("request");




//Create the function exported
function SynonymAPI(apiKey) {
    this.apiKey = apiKey;
}

 /*Add a function getSynonyms that request to the web api
        and gives back the results as an object to the callback function
        */
        SynonymAPI.prototype.getSynonyms = function(word, callback) {
            var address = "http://words.bighugelabs.com/api/2/" + this.apiKey + "/" + word + "/json";
            request(address, function(error, result) {
                if(error){
                    callback(error);
                } else {
                    if(result.body){
                        var resultOjectSynonyms = JSON.parse(result.body);
                        var synonyms = resultOjectSynonyms.noun.syn;
                        callback(synonyms);
                    } else {
                        callback("NO MATCH FOUND");
                        
                    }
                   
                }
                
            });
        };


//Exporting constructor function called SynonymAPI 
        module.exports = SynonymAPI;