/*
Task: ([3, 2, 1, 5, 6, -1, 10]) => "-1,1-3,5-6,10"
 */
// [1,2,3] -> '1-3'
function zip(a) {
    a = [...a];
    a = a.sort((a, b) => a - b);
    let first = a[0];
    let last = a[0];
    let res = [];

    a.forEach(el => {
        if (el === a[0]) return;
        if (last + 1 !== el) {
            if (first === last) {
                res.push(first);
            } else {
                res.push(`${first}-${last}`)
            }
            first = el;
        }
        last = el;
    });

    return first === last ? [...res, first].join(',') : [...res, `${first}-${last}`].join(',');
}

console.log(zip([3, 2, 1, 5, 6, -1, 10]))
console.log(zip([4,6,7,8,9,-1,0,1]));
console.log(zip([1,2,3]));