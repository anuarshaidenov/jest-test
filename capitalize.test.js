const capitalize = require('./capitalize');

test('should return a capitalized string', () => {
  const strInput = 'hellow world';
  const strOutput = 'Hellow world';

  const functionResult = capitalize(strInput);

  expect(functionResult).toBe(strOutput);
});

test('should return a capitalized string', () => {
  const strInput = 'hellow';
  const strOutput = 'Hellow';

  const functionResult = capitalize(strInput);

  expect(functionResult).toBe(strOutput);
});
