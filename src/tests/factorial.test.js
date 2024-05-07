const factorial = require("../factorial");

describe("factorial", () => {
    it("should return a function for positive integers", () => {
        expect(typeof factorial(5)).toBe("function");
    });
    it("should return 120 for 5", () => {
        expect(factorial(5)).toBe(120);
    });
    it("should return 24 for 4", () => {
        expect(factorial(4)).toBe(24);
    });
    it("should return 6 for 3", () => {
        expect(factorial(3)).toBe(6);
    });
    it("should return 1 for 1", () => {
        expect(factorial(1)).toBe(1);
    });
    it("should return 0 for 0", () => {
        expect(factorial(0)).toBe(0);
    });
    it("should throw an error for negative integers", () => {
        expect(() => {
            factorial(-1);
        }).toThrow();
    });
    it("should throw an error for strings", () => {
        expect(() => {
            factorial("1");
        }).toThrow();
    });
    it("should throw an error for objects", () => {
        expect(() => {
            factorial({});
        }).toThrow();
    });
    it("should throw an error for arrays", () => {
        expect(() => {
            factorial([]);
        }).toThrow();
    });
    it("should throw an error for booleans", () => {
        expect(() => {
            factorial(true);
        }).toThrow();
    });
    it("should throw an error for null", () => {
        expect(() => {
            factorial(null);
        }).toThrow();
    });
    it("should throw an error for undefined", () => {
        expect(() => {
            factorial(undefined);
        }).toThrow();
    });
});
