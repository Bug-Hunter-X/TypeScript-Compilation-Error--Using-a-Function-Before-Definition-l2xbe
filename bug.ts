function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result = add(5, 3); // result is 8
console.log(result); // output: 8

result = subtract(5, 3); // result is 2
console.log(result); // output: 2

// The following line will cause a compilation error because the function is not defined
result = multiply(5, 3); // Error: Cannot find name 'multiply'.