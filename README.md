## NodeJS Workshop #2

### Base instructions
  * **If you did not finish** the exercises from the first NodeJS workshop, please complete these first.
  * Fork this repository and clone it in a new Cloud9 workspace.
  * All the work will be done in the `master` branch.

### Creating our own callback-receiving functions (higher-order functions)
  * Create a file called `call-callbacks.js` where all your code will be
  * Create a function called `firstChar` that takes a string and a callback, and "returns" the first character of the string **after one second**.
  * **NOTE**: You won't be allowed to use the `return` keyword, because you'll only be "returning" in the callback to `setTimeout`, *way after your function has finished executing*.
  * Create a function called `lastChar` that takes a string and "returns" the last character of the string after one second.
  * Create a function called `getFirstAndLast` that takes a string and "returns" the first+last character of the string. Your function should use `firstChar` and `lastChar` to do its work. I should be able to call your function like this:
```javascript
  getFirstAndLast("hello", function(firstLast) {
    console.log(firstLast); // should output "ho"
  });
```
  * Add/commit/push
  * Create a pull request, and **keep pushing to it after each exercise**


### Initializing your project
  * Using `npm init`, initialize your project any way you like.
  * Add/commit/push the newly created `package.json` to Git

### Ignoring `node_modules`
  * Create a file at the root of your project called `.gitignore`
  * In this file, write one line that says `node_modules`, and save the file
  * Add and commit the `.gitignore` to Git

### Your first module!
  * Create a `library` directory at the root of your project
  * Inside this directory, create a file called `fortune.js`
  * In this file, create a module that exports one `getFortune` function
  * When the `getFortune` function is called, it should return a random fortune/motivational quote
  * Add/commit/push

### Using your first module
  * At the root of the project, create a file called `fortune-teller.js`
  * In this file, load your `fortune` module that you created in the previous step
  * Using the module, make your program output a random fortune to the command-line
  * Run your program from the command line with `node fortune-teller.js`
  * Add/commit/push

### How's the weather?
  * Go to [Forecast.io API](https://developer.forecast.io/) and read the documentation
  * Get yourself a free API key
  * Remember the Google Geocoding API from yesterday's workshop
  * Using both APIs, complete the following workflow:
    * Ask the user for their location
    * Retrieve the weather for the user's location
    * Display the current weather as well as the next 5 days weather in a nice way
    * **Hint**: to display the results in a nice way, a few NPM modules could be useful, including but not limited to:
      * `colors`
      * `cli-table`
      * `node-emoji`
  * Add/commit/push

### Synonyms/similar words/equivalent words/commensurate words
  * Go to [Big Huge Thesaurus](https://words.bighugelabs.com/api.php) and read the documentation for the API
  * Get yourself a free API key from their system
  * Using this API, we will create a NodeJS app for synonyms
  * **Creating the API**:
    * Create a file `library/synonyms.js`
    * In this file, create and export a **constructor function** called `SynonymAPI`. It takes an api key as parameter and sets it on the new object
    * In the prototype of `SynonymAPI`, add a function `getSynonyms`. It takes a word and a callback. It makes a request to the web api and gives back the results **as an object** to the callback function.
    * *If there was an error, it should be passed down to the callback*
  * **Creating the program**:
    * Create a file `get-synonyms.js` at the root of your project
    * Import your module and create an instance using your API key
    * Prompt the user for a word
    * Using your API, retrieve the synonyms/antonyms/etc. for the input word
    * If everything goes well, display all the results to the user in a nice way
    * **Hint**: to display the results in a nice way, a few NPM modules could be useful, including but not limited to:
      * `colors`
      * `cli-table`
      * `node-emoji`
  * Add/commit/push
