const arr1 = [1,2,3,[1,2,3,4, [2,3,4]]];
const deepFlates = arr => arr.reduce((acc, cur) => Array.isArray(cur) ? [...acc, ...deepFlat(cur)] : [...acc, cur], []);
const test1 = () => {
    deepFlates(arr1)
}

const deepFlat = arr => arr.reduce((acc, cur) => Array.isArray(cur) ? acc.concat(deepFlates(cur)) : acc.concat(cur), []);
const test2 = () => {
    deepFlat(arr1)
}