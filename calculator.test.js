const calculator = require('./calculator');

describe('The result of the addition should be equal to ', () => {
  test('4', () => {
    const result = calculator.add(2, 2);
    expect(result).toBe(4);
  });

  test('0', () => {
    const result = calculator.add(-1, 1);
    expect(result).toBe(0);
  });

  test('100', () => {
    const result = calculator.add(99, 1);
    expect(result).toBe(100);
  });
});

describe('The result of the subtraction should be equal to ', () => {
  test('0', () => {
    const result = calculator.subtract(2, 2);
    expect(result).toBe(0);
  });

  test('0', () => {
    const result = calculator.subtract(-1, -1);
    expect(result).toBe(0);
  });

  test('100', () => {
    const result = calculator.subtract(101, 1);
    expect(result).toBe(100);
  });
});

describe('The result of the division should be equal to ', () => {
  test('1', () => {
    const result = calculator.divide(2, 2);
    expect(result).toBe(1);
  });

  test('Infinity', () => {
    const result = calculator.divide(5, 0);
    expect(result).toBe(Infinity);
  });

  test('0', () => {
    const result = calculator.divide(0, 5);
    expect(result).toBe(0);
  });

  test('100', () => {
    const result = calculator.divide(100, 1);
    expect(result).toBe(100);
  });
});

describe('The result of the multiplication should be equal to ', () => {
  test('4', () => {
    const result = calculator.multiply(2, 2);
    expect(result).toBe(4);
  });

  test('-0', () => {
    const result = calculator.multiply(-1, 0);
    expect(result).toBe(-0);
  });

  test('0', () => {
    const result = calculator.multiply(1, 0);
    expect(result).toBe(0);
  });

  test('-99', () => {
    const result = calculator.multiply(99, -1);
    expect(result).toBe(-99);
  });
});
