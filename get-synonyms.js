var synonymAPI = require("./library/synonyms");
var prompt = require("prompt");

//Create an instance using your API key

var syn = new synonymAPI("814a9327ec33b5e1ee0fa65528dd10db");

//Ask the user for a word and with his answer, get the synonym
prompt.start();

function getSyn(){
        prompt.get(["word"],function(err, result) {
            if(err) {
                console.log(err);
            }
            else{
                var word = result["word"].toLowerCase();
                syn.getSynonyms(word, function(res) {
                    if(res === "NO MATHC FOUD"){
                        getSyn();
                    }
                    else{
                        console.log(res);    
                    }
                });
            }
        });
}

getSyn();