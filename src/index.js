module.exports = function solveEquation(equation) {
  let x1 = 0, x2 = 0, d = 0; 

equation = equation.replace(/\s/g,'').match(/(-|\+|[0-9])[0-9]*/g);

  equation.splice(1, 1);
  
  let [a, b, c] = equation;
  
  d = Math.pow(b, 2) - 4 * a * c;
  
  x1 = Math.round((-1 * b + Math.sqrt(d)) / (2 * a));
  x2 = Math.round(-1*((+b) + Math.sqrt(d)) / (2 * a));
   
  return [x1, x2].sort((a,b)=>a-b);
}
