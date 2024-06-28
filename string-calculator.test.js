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

//Case3 - Two Numbers
test('returns the sum of two comma-separated numbers', () => {
    expect(add("1,2")).toBe(3);
    expect(add("100,5")).toBe(105);
});

//Case4 - Multiple Numbers
test('returns the sum of multiple comma-separated numbers', () => {
    expect(add("1,2,3,4")).toBe(10);
    expect(add("10,20,30")).toBe(60);
});

//Case5 - handle new lines
test('returns the sum of numbers separated by commas and new lines', () => {
    expect(add("1\n2,3")).toBe(6);
    expect(add("10\n20\n30")).toBe(60);
});