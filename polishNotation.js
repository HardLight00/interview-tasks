const execute = expression => {
  return expression.split(' ').reduce((accum, current) => {
      if (!isNaN(+current)) {
          accum.push(current)
      } else {
          const [op1, op2] = accum.splice(accum.length - 2, 2);
          accum.push(eval(`${op1}${current}${op2}`));
      }
      return accum;
  }, [])[0];
};

console.log(execute('3 2 +') === 5); // 3 + 2 = 5
console.log(execute('3 2 -') === 1); // 3 - 2 = 1
console.log(execute('3 2 *') === 6); // 3 * 2 = 6
console.log(execute('6 2 /') === 3); // 6 / 2 = 3
console.log(execute('3 2 * 1 + 3 1 - /') === 3.5); // (3 * 2 + 1) / (3 - 1) = 7 / 2 = 3.5