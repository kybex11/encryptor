const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const encrypt = {
    "a": "z",
    "b": "y",
    "c": "x",
    "d": "w",
    "e": "v",
    "f": "u",
    "g": "t",
    "h": "s",
    "i": "r",
    "j": "q",
    "k": "p",
    "l": "o",
    "m": "n",
    "n": "m",
    "o": "l",
    "p": "k",
    "q": "j",
    "r": "i",
    "s": "h",
    "t": "g",
    "u": "f",
    "v": "e",
    "w": "d",
    "x": "c",
    "y": "b",
    "z": "a"
};

function decodeMessage() {
    rl.question("Enter your message here: ", (message) => {
        const decodedMessage = message.split('').map(char => encrypt[char] || char).join('');
        console.log(decodedMessage);
        decodeMessage();
    });
};

decodeMessage();