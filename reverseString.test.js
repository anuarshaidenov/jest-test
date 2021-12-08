const reverseString = require('./reverseString');

test('String "Hello" should return "olleH"', () => {
  const strInput = 'Hello';
  const strOutput = 'olleH';

  const functionResult = reverseString(strInput);

  expect(functionResult).toEqual(strOutput);
});

test('The length of the string should not be less than 1 character', () => {
  const strInput = '';

  const callbackOutput = () => reverseString(strInput);

  expect(callbackOutput).toThrow(Error);
});
