const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('addition of whole numbers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });
  it('addition of whole number (a) and rounded-up number (b)', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });
  it('addition of rounded-down number (a) and rounded-up number (b)', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });
  it('addition of rounded-up number (a) and rounded-up number (b)', () => {
    assert.strictEqual(calculateNumber(1.5, 3.6), 6);
  });
  it('addition of rounded-down number (a) and rounded-down number (b)', () => {
    assert.strictEqual(calculateNumber(1.2, 3.4), 4);
  });
  it('addition of floating whole numbers', () => {
    assert.strictEqual(calculateNumber(2.0, 3.0), 5);
  });
});
