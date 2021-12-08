const stringLength = require('./strlen');

test('The length of the string "anuar" should be 5', () => {
  const strInput = 'anuar';

  const strResult = stringLength(strInput);

  expect(strResult).toBe(5);
});

test('The length of the string should not exceed 10 characters', () => {
  const strInput = '1234567890';

  const strResult = stringLength(strInput);

  expect(strResult).not.toBeGreaterThan(10);
});

test('The length of the string should not be less than 1 character', () => {
  const strInput = 's';

  const strResult = stringLength(strInput);

  expect(strResult).not.toBeLessThan(1);
});
