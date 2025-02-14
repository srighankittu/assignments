/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor(result = 0) {
    this.result = result;
  }

  add(x) {
    this.result += x;
  }
  subtract(x) {
    this.result -= x;
  }
  multiply(x) {
    this.result *= x;
  }
  divide(x) {
    if (x == 0) throw new Error("Error");
    this.result /= x;
  }
  clear() {
    this.result = 0;
  }
  getResult() {
    return this.result;
  }
  calculate(expression) {
    const cleanedExpression = expression.replace(/\s+/g, "");
    // console.log(cleanedExpression);
    const isValidInput = /^[0-9+\-*/().]+$/g.test(cleanedExpression);
    if (!isValidInput) {
      throw new Error("Error");
    } else {
      if (cleanedExpression.includes("/0")) {
        throw new Error("Division by zero is not allowed");
      }
      this.result = eval(cleanedExpression);
      return this.result;
    }
  }
}

module.exports = Calculator;
