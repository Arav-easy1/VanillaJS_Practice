const calculator = {
  plus: function(a, b) {
    return a + b;
  },
  mul: function(a, b) {
    return a * b;
  },
  minus: function(a, b) {
    return a - b;
  },
  div: function(a, b) {
    return a / b;
  },
  power: function(a,b){
    return Math.pow(a,b);
  }
}

// console.log(greetNicolas);
const plus = calculator.plus(5, 5);
const mul = calculator.mul(5, 5);
const minus = calculator.minus(5, 5);
const div = calculator.div(5, 5);
const power = calculator.power(5, 5);
console.log(plus);
console.log(mul);
console.log(minus);
console.log(div);
console.log(power);
