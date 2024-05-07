const isValidDNA = require("./dna.js");
describe('DNA',() => {
    it('should return true for valid DNA', () => {
        expect(isValidDNA('ATCG')).toBe(true);
    });
    it('should return false for invalid DNA', () => {
        expect(isValidDNA('ATCGA')).toBe(false);
    });
});
