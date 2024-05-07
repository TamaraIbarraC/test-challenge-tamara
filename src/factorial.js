/*
- Implement a function to calculate the factorial of a number using recursion.
  - Ensure it handles edge cases: negative numbers or non-integer inputs.

For each tasks, develop a suite of tests inside the `tests directory`.
Thoroughly validate functionality.
Include positive and negative test cases to cover various scenarios and edge cases.
This approach will ensure your functions behave as expected under different conditions

*/

function factorial(n) {
    if (n < 0) {
        return "Error: negative numbers not allowed";
    } else if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

module.exports = factorial;