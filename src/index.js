const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let exprArr = [], decodedStr = '';
    for (let i = 0; i < expr.length; i += 10) {
        exprArr.push(expr.slice(i, i + 10));
    }
    exprArr.forEach(decodeString);
    return decodedStr;

    function decodeString(symbol) {
        if (symbol === '**********') { decodedStr = `${decodedStr} `} else {
            symbol = symbol.replace(/10/g, '.').replace(/11/g, '-').replace(/0/g, '');
            decodedStr = `${decodedStr}${MORSE_TABLE[symbol]}`;
        };
    };
}

module.exports = {
    decode
}