Math.sum = function (...args) {
    let sum = 0;
    for (const i of args) {
        sum+=i;
    }
    return sum;
}
function sum (...a) {
    let sum = Math.sum(a);
    function help(...b) {
        sum += Math.sum(b);
        return help;
    }
    help[Symbol.toPrimitive] = () => sum;
    return help;
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17)(200)()(12))