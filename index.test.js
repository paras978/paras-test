// NOTE - Tulis kode pengujian disini
// Path: test.index.js
// ! Dont change this code
const { capitalize, filterOddNumber, epochDateToUTC } = require("./index");
const { expect, describe, test } = require("@jest/globals");

// @ Capitalize
// ! Write Minimum 4 different test case, with different matcher for capitalize
/**
 * Example input param = "hello"
 * Expected output = "Hello"
 */
describe("Capitalize", () => {
  test("should return uppercased Hello", () => {
    // Write ur test-code here!
    expect(capitalize('hello')).toBe('Hello');
  });

  // write another 3 test case here!
  test("should return uppercased World", () => {
    expect(capitalize('world')).toBe('World');
  });
  test("should return empty string for empty input", () => {
    expect(capitalize('')).toBe('');
  });
  test("should return the same string for single uppercase letter", () => {
    expect(capitalize('a')).toBe('A');
  });

});

// @ FilterOddNumber
// ! Try to check the filterOddNumber function, and repair the function
describe("FilterOddNumber", () => {
  it("should return [2,4]", () => {
    expect(filterOddNumber([1, 2, 3, 4, 5])).toEqual([2, 4]);
  });

  it("should return []", () => {
    expect(filterOddNumber([1, 3, 5, 7, 9])).toEqual([]);
  });
});

// @ EpochDateToUTC
// ! Write Minimum 4 different test case for epochDateToUTC
/**
 * Example input param = 0
 * Expected output = Thu, 01 Jan 1970 00:00:00 GMT
 */
describe("EpochDateToUTC", () => {
  it("should handle a positive epoch timestamp", () => {
    const expectedDate = new Date(0).toUTCString();
    expect(epochDateToUTC(0)).toBe(expectedDate);
  });

  it("should handle a positive epoch timestamp with a specific date", () => {
    const expectedDate = new Date(1633866836 * 1000).toUTCString();
    expect(epochDateToUTC(1633866836)).toBe(expectedDate);
  });

  it("should handle a negative epoch timestamp", () => {
    const expectedDate = new Date(-1633866836 * 1000).toUTCString();
    expect(epochDateToUTC(-1633866836)).toBe(expectedDate);
  });

  it("should handle invalid epoch date correctly", () => {
    const result = epochDateToUTC("invalidDate");
    expect(result).toBe("Invalid Date");
  });
});

