const tree = {
    value: 3,
    next: [{
        value: 2,
        next: null
    }, {
        value: 1,
        next: [{
          value: 4,
          next: null
        }, {
          value: 4,
          next: null
        }]
    }]
  };

const treeSum = (acc => tree => {
    if (tree.value) {
        acc+=tree.value;
    }
    if (tree.next) {
        tree.next.forEach(treeSum);
    }
    return acc;
})(0);

console.log(treeSum(tree));