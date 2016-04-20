 
//The getFortune function returns a random fortune/motivational quote

var randomNumber = Math.floor(Math.random() * 10);
var arrOfQuotes = ["Do not wait to strike till the iron is hot; but make it hot by striking. – William B. Sprague",
"Don’t ask yourself what the world needs, ask yourself what makes you come alive. And then go do that. Because what the world needs is people who have come alive. — Howard Thurman",
"I get knocked down. But I get up again. You’re never going to keep me down. – Chumbawamba",
"If you’re going through hell, keep going. — Winston Churchill",
"Nothing contributes so much to tranquilize the mind as a steady purpose– a point on which the soul may fix its intellectual eye. – Mary Shelley",
"There is no such thing as failure. There are only results. – Tony Robbins",
"Time is the coin of life. Only you can determine how it will be spent. – Carl Sandburg",
"To different minds, the same world is a hell, and a heaven. – Ralph Waldo Emerson",
"To hell with circumstances; I create opportunities. – Bruce Lee",
"When it’s time to die, let us not discover that we have never lived. -Henry David Thoreau"]


function getFortune() {
    return arrOfQuotes[randomNumber];
}

//Always at the end of my code
module.exports = {
    getFortune: getFortune
};

