/*
Task: check is the word is anagram to another word
 */

const wordToObj = word => {
    return [...word].reduce((obj, char) => ({...obj, [char]: obj[char] + 1 || 1}), {});
};

const isAnagram = (word1, word2) => {
  const obj1 = wordToObj(word1);
  const obj2 = wordToObj(word2);

  if (Object.keys(obj1).length !== Object.keys(obj2).length)
      return false;

  return Object.entries(obj1).every(([key, value]) => obj2[key] === value);
};

console.log('word', 'dowr:', isAnagram('word', 'dowr'));
console.log('word', 'dowwr:', isAnagram('word', 'dowwr'));
