const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('type == "SUM"', () => {
    it('addition of floating numbers', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.deep.equal(6);
    });
  });
  describe('type == "SUBTRACT"', () => {
    it('subtraction of floating numbers', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.deep.equal(-4);
    });
  });
  describe('type == "DIVIDE"', () => {
    it('division of floating numbers', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.deep.equal(0.2);
    });
    it('divition of floating number and 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.deep.equal('Error');
    });
  });
});
