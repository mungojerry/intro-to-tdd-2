let assert = require('assert');
let frothhiss = require('../src/frothhiss');

function assertExists(array, string, msg) {
  assert.ok(array.indexOf(string) > -1, msg);
}

describe('frothhiss', () => {
  it('should return a list of the correct size', () => {
    let output = frothhiss.run(1, 5);
    assert.strictEqual(output.length, 5);
  });
  it('should return the appropriate results for 1-15', () => {
    let output = frothhiss.run(1, 15);
    assert.deepEqual(
      output, [
        '1',
        '2',
        'Froth',
        '4',
        'Hiss',
        'Froth',
        '7',
        '8',
        'Froth',
        'Hiss',
        '11',
        'Froth',
        '13',
        '14',
        'FrothHiss'
      ]
    );
  });
  describe('getResult', () => {
    it('should return 1 for 1', () => {
      assert.deepEqual(frothhiss.getResult(1), 1);
    });

    it('should return Froth for multiples of 3', () => {
      assertExists(frothhiss.getResult(3), 'Froth');
      assertExists(frothhiss.getResult(6), 'Froth');
      assertExists(frothhiss.getResult(9), 'Froth');
    });

    it('should return Hiss for multiples of 5', () => {
      assertExists(frothhiss.getResult(5), 'Hiss');
      assertExists(frothhiss.getResult(10), 'Hiss');
      assertExists(frothhiss.getResult(15), 'Hiss');
    });

    it('should return all results when there is more than 1 multiple', () => {
      assert.deepEqual(frothhiss.getResult(15), 'FrothHiss');
    });
  });
});
