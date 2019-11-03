/*
Task: ([3, 2, 1, 5, 6, -1, 10]) => "-1,1-3,5-6,10"
 */

const numericalSort = (a, b) => a - b;

const zipping = array => {
    const sorted = array.sort(numericalSort);
    return sorted.reduce((accum, current) => `${accum},${current}`)
};

const zippingJoin = array => {
    const sorted = array.sort(numericalSort);
    return sorted.join(',')
};

console.log("[3, 2, 1, 5, 6, -1, 10] => ", zipping([3, 2, 1, 5, 6, -1, 10]));
console.log("[3, 2, 1, 5, 6, -1, 10] => ", zippingJoin([3, 2, 1, 5, 6, -1, 10]));
