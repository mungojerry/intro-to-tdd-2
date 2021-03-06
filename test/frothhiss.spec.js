let frothhiss = require('../src/frothhiss');
let chai = require('chai');
let expect = chai.expect;

let testData = [
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
];

describe('frothhiss', () => {
    it('should have a run method', () => {
        expect(frothhiss.run).to.be.an('function');
    });

    it('should return a list of the correct size', () => {
        expect(frothhiss.run(1, 5).length).to.equal(5);
    });

    it('should return the appropriate results for 1-15', () => {
        let output = frothhiss.run(1, 15);
        expect(output).to.equal(testData);
    });

    describe('getResult', () => {
        it('should return 1 for 1', () => {
            expect(frothhiss.getResult(1)).to.equal('1');
        });

        it('should return Froth for multiples of 3', () => {
            expect(frothhiss.getResult(3)).to.equal('Froth');
            expect(frothhiss.getResult(6)).to.equal('Froth');
            expect(frothhiss.getResult(9)).to.equal('Froth');
            expect(frothhiss.getResult(15)).to.contain('Froth');
        });

        it('should return Hiss for multiples of 5', () => {
            expect(frothhiss.getResult(5)).to.equal('Hiss');
            expect(frothhiss.getResult(10)).to.equal('Hiss');
            expect(frothhiss.getResult(15)).to.contain('Hiss');
        });

        it('should return FrothHiss when inout is 15', () => {
            expect(frothhiss.getResult(15)).to.equal('FrothHiss');
        });
    });
});
