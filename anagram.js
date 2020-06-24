/*
Task: check is the word is anagram to another word
 */
const isAnagram = (word, otherWord) => {
    const letters1 = {};
    const letters2 = {};
    for (const letter of word) {
        letters1[letter] = letters1[letter] + 1 || 1;
    }
    for (const letter of otherWord) {
        letters2[letter] = letters2[letter] + 1 || 1;
    }
    
    if (Object.keys(letters1).length !== Object.keys(letters2).length) return false;
    
    for (const letter in letters1) {
        if (letters1[letter] !== letters2[letter]) return false;
    }

    return true;
}

console.log(isAnagram('123', '321'))
console.log(isAnagram('122', '321'))
console.log(isAnagram('qwe', 'wqe'))
