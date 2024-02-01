const reverseString = function(word) {

    let splittedWord = [];
    let reversedWord = [];

    let wordLength = word.length;

    for (let i = 0; i < wordLength; i++) {
        splittedWord.push(word[i]);
    }


    for (let j = 0; j < wordLength; j++) {
       reversedWord.push(splittedWord.pop());
    }

    return reversedWord.join('');
};

// Do not edit below this line
module.exports = reverseString;
