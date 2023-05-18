const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('type == "SUM"', () => {
    it('addition of floating numbers', () => {
	assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });
  });
  describe('type == "SUBTRACT"', () => {
    it('subtraction of floating numbers', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
  });
  describe('type == "DIVIDE"', () => {
    it('division of floating numbers', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });
    it('divition of floating number and 0', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });
});
