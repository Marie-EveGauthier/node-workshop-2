module.exports = function getFortune() {
        var fortune = ["Today is a good day!", "Buy a lotery ticket, it's your lucky day", "You are a smart and fabulous person", 'Watch the sky, we never know what could be failing"]']
        var random = Math.random();

        if (random <= 0.25) {
            return fortune[0];
        }
        else if (0.25 < random >= 0.5) {
            return fortune[1];
        }
        else if (0.5 < random >= 0.75) {
            return fortune[2];
        }
        else if (0.75 < random) {
            return fortune[3]
        }
};

