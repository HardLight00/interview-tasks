const tests = ["Eva, can I see bees in a cave?", "QWErtyTRewq", "Yandex"];

const isPalindromeRegExp = str => {
    const replaced = str.replace(/[^\w]+/g, '').toLowerCase();
    return replaced === [...replaced].reverse().join('')
};

const isPalindromeIterative = str => {
    let i = 0, j = str.length - 1, isSatisfy = true;
    const lowerStr = str.toLowerCase();
    const isNotChar = char => /[^\w]/.test(char);
    while (i <= j && isSatisfy) {
        if (isNotChar(lowerStr[i]))
            i++;
        else if (isNotChar(lowerStr[j]))
            j--;
        else
            isSatisfy = lowerStr[i++] === lowerStr[j--];
    }
    return isSatisfy;
};

const isPalindromeRecursive = str => {
    const lowerStr = str.toLowerCase();
    const isNotChar = char => /[^\w]/.test(char);
    const recursiveCall = (str, start, end) => {
        if (start > end)
            return true;
        while (isNotChar(str[start]))
            start++;
        while (isNotChar(str[end]))
            end--;
        return str[start++] === str[end--] ? recursiveCall(str, start, end) : false
    };
    return recursiveCall(lowerStr, 0, lowerStr.length - 1);
};


const runTests = (func, tests) => tests.reduce((result, test) => (`${result}\n${test}: ${func(test)}`), '');

console.log(runTests(isPalindromeRegExp, tests));
console.log(runTests(isPalindromeIterative, tests));
console.log(runTests(isPalindromeRecursive, tests));
