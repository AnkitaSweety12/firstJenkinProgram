const chai = require('chai');
const app = require('../app');

const expect = chai.expect;

describe('Add function', () => {
  it('should return the sum of two numbers', () => {
    const result = app.add(2, 3);
    expect(result).to.equal(5);
  });
});

describe('Substract function', () => {
  it('should return the difference of two numbers', () => {
    const result = app.substract(10, 3);
    expect(result).to.equal(7);
  });
});

