const add = require("./string-calculator");

//Case1 - Empty String
test('returns 0 for an empty string', () => {
    expect(add("")).toBe(0);
});

//Case2 - One Number
test('returns the number itself when a single number is provided', () => {
    expect(add("1")).toBe(1);
    expect(add("42")).toBe(42);
});