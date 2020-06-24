const zipString = str => {
    if (str.length === 0) {
        return '';
    }
    
    let result = '';
    const acc = { symbol: str[0], count: 1 };

    for (let i = 1; i < str.length; i++) {
        const letter = str[i];
        
        if (acc.symbol === letter) {
            acc.count++;
        } else if (acc.count === 1) {
            result += acc.symbol;
            acc.count = 1;
        } else {
            result += acc.symbol + acc.count;
            acc.count = 1;
        }
        acc.symbol = letter;
    }
    if (acc.count === 1) {
        result += acc.symbol;
    } else {
        result += acc.symbol + acc.count;
    }
    
    return result;
};

console.log(zipString('AAABbbbBcCCC'));
console.log(zipString('AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB'));