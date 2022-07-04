var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

lines.pop();
const multiplica = (numero1, numero2) => numero1 * numero2;
const produto = lines.map(Number).reduce(multiplica);
console.log (`PROD = ${produto}`);