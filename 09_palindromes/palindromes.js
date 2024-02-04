const palindromes = function (str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedStr = str.split('').reverse().join('');
    console.log(str);
    console.log(reversedStr);
    return str == reversedStr;


};


// Do not edit below this line
module.exports = palindromes;
