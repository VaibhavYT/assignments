class Calculator {
  constructor() {
    this.result = 0;
  }

  add(number) {
    this.result += number;
    return this.result;
  }

  subtract(number) {
    this.result -= number;
    return this.result;
  }

  multiply(number) {
    this.result *= number;
    return this.result;
  }

  divide(number) {
    if (number === 0) {
      throw new Error("Can't Divide By 0");
    }
    this.result /= number;
    return this.result;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    
    expression = expression.replace(/\s+/g, '');

   
    if (/[^0-9+\-*/().]/.test(expression)) {
      throw new Error('Invalid Character');
    }

    
    try {
      this.result = eval(expression);
      if (!isFinite(this.result)) {
        throw new Error('Division by zero');
      }
    } catch (e) {
      throw new Error('Invalid Expression');
    }

    return this.result;
  }
}

module.exports = Calculator;
