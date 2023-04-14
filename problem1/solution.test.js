const { sum_to_n_a, sum_to_n_b, sum_to_n_c } = require("./solution");

describe("sum_to_n_a", () => {
  test("should return the correct sum 15 for n = 5", () => {
    expect(sum_to_n_a(5)).toEqual(15);
  });

  test("should return the correct sum 0 for n = 0", () => {
    expect(sum_to_n_a(0)).toBe(0);
  });

  test("should take absolute value if input is a negative number", () => {
    expect(sum_to_n_a(-5)).toBe(15);
  });

  test("should throw an error if input is not a number", () => {
    expect(sum_to_n_a("5")).toBe("Input must be a number");
  });
});

describe("sum_to_n_b", () => {
  test("should return the correct sum 15 for n = 5", () => {
    expect(sum_to_n_b(5)).toEqual(15);
  });

  test("should return the correct sum 0 for n = 0", () => {
    expect(sum_to_n_b(0)).toBe(0);
  });

  test("should take absolute value if input is a negative number", () => {
    expect(sum_to_n_b(-5)).toBe(15);
  });

  test("should throw an error if input is not a number", () => {
    expect(sum_to_n_b("5")).toBe("Input must be a number");
  });
});

describe("sum_to_n_c", () => {
  test("should return the correct sum 15 for n = 5", () => {
    expect(sum_to_n_c(5)).toEqual(15);
  });

  test("should return the correct sum 0 for n = 0", () => {
    expect(sum_to_n_c(0)).toBe(0);
  });

  test("should take absolute value if input is a negative number", () => {
    expect(sum_to_n_c(-5)).toBe(15);
  });

  test("should throw an error if input is not a number", () => {
    expect(sum_to_n_c("5")).toBe("Input must be a number");
  });
});
