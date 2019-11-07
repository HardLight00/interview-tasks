/*
Validate sequence of brackets
 */

// first three - true, other - false
const tests = [
    '((()))',
    '(()())()',
    '({}[()])',
    '()()(',
    '{{{][]}()}'
];

const validationRegExp = sequence => {
    const regexp = /\(\)|\[]|{}/g;
    return regexp.test(sequence) ? validationRegExp(sequence.replace(regexp, '')) : sequence.length === 0;
};

const validationStack = sequence => {
    const stack = [];
    for (const char of sequence) {
        switch (char) {
            case '(':
            case '[':
            case '{':
                stack.push(char);
                break;
            case ')':
                if (stack.pop() !== '(')
                    return false;
                break;
            case ']':
                if (stack.pop() !== '[')
                    return false;
                break;
            case '}':
                if (stack.pop() !== '{')
                    return false;
                break;
            default:
                return false;
        }
    }
    return stack.length === 0;
};

const validationStackWithDict = sequence => {
    const stack = [];
    const validPairs = {
        ')': '(',
        ']': '[',
        '}': '{',
    };
    for (const char of sequence) {
        const pair = validPairs[char];
        if (!pair)
            stack.push(char);
        else if (stack.pop() !== pair)
            return false;
    }
    return stack.length === 0;
};

const runTests = (validation, tests) => tests.reduce((result, test) => (`${result}\n${test}: ${validation(test)}`), '');

console.log(runTests(validationRegExp, tests));
console.log(runTests(validationStack, tests));
console.log(runTests(validationStackWithDict, tests));