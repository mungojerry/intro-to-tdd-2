let frothhiss = require('../src/frothhiss.js');
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
    describe('getResult', () => {
        it('should return 1 for 1', () => {
            expect(frothhiss.getResult(1)).to.deep.equal('1');
        });

    });
});