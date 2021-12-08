function reverseString(string) {
  if (string.length < 1) throw new Error('Invalid string length');

  return string.split('').reverse().join('');
}
module.exports = reverseString;
