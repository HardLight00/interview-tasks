/*
Task: sum(2) => 2, sum(2)(3) => 5, sum(2)(3)(4) => 9 ...
 */


const sum = (...a) => {
    const subSum = a => a.reduce((accum, current) => accum + current || 0, 0);
    const f = currentSum => {
        const k = (...b) => f(currentSum + subSum(b));
        k[Symbol.toPrimitive] = () => currentSum;
        return k;
    };
    return f(subSum(a));
};

console.log(+sum(2) === 2);
console.log(+sum(2)(3) === 5);
console.log(+sum(2)(3)(4) === 9);
console.log(+sum(2, 3)(3, 4)(4) === 16);
console.log(+sum(2)()(4) === 6);
console.log(+sum()() === 0);
console.log(+sum() === 0);
