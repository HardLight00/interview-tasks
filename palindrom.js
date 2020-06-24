const isPalindrom = (str, replaced = '') => [...(replaced = str.replace(/[^\w]+/g, '').toLowerCase())].reverse().join('') === replaced;

