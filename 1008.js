var input = require("fs").readFileSync("stdin", "utf8");

var valores = input.split("\n");

var idFuncionario = valores.shift();
var qtdHorasTrabalhadas = valores.shift();
var valorHora = valores.shift();

var salario = qtdHorasTrabalhadas * valorHora;

console.log("NUMBER = " + idFuncionario);
console.log("SALARY = U$ " + salario.toFixed(2));


// var valores = input.split("\n");

// var idFuncionario = parseInt(valores.shift());
// var qtdHorasTrabalhadas = parseInt(valores.shift());
// var valorHora = parseFloat(valores.shift());

// var salario = qtdHorasTrabalhadas * valorHora;

// console.log("NUMBER = " + idFuncionario);
// console.log("SALARY = U$ " + salario.toFixed(2));