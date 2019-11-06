/*
Task: ('AAABbbbBcCCC') => 'A3Bb3BcC3'
 */

const zipString = str => {
    let zipped = '',
        current = str[0],
        count = 0;
    [...str].forEach(char => {
        if (char !== current) {
            zipped += count > 1 ? `${current}${count}` : current;
            current = char;
            count = 1;
        } else {
            count++;
        }
    });

    return count > 1 ? `${zipped}${current}${count}` : zipped + current;
};

console.log(zipString('AAABbbbBcCCC'));
console.log(zipString('AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB'));