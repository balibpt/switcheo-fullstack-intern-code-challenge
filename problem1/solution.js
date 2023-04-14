/*
Provide 3 unique implementations of the following function.

**Input**: `n` - any integer

Assuming this input will always produce a result lesser than `Number.MAX_SAFE_INTEGER`.

**Output**: `return` - summation to `n`, i.e. `sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15`.
*/

// Solving using for loop
var sum_to_n_a = function (n) {
  var sum = 0;
  if (typeof n !== "number") {
    return "Input must be a number";
  }
  for (i = 1; i <= Math.abs(n); i++) {
    sum += i;
  }
  return sum;
};

// Solving using recursion
var sum_to_n_b = function (n) {
  if (typeof n !== "number") {
    return "Input must be a number";
  }

  var n = Math.abs(n);
  if (n == 0) {
    return 0;
  } else {
    return n + sum_to_n_b(n - 1);
  }
};

// Solving using .reduce() method
var sum_to_n_c = function (n) {
  if (typeof n !== "number") {
    return "Input must be a number";
  }
  var arr = Array.from({ length: Math.abs(n) }, (_, index) => index + 1);

  const sum = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  return sum;
};

module.exports = { sum_to_n_a, sum_to_n_b, sum_to_n_c };
