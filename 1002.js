var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


const soma = (a, b) => a + b;
const resultado = lines.map(Number).reduce(soma);
console.log(`SOMA = ${resultado}`);