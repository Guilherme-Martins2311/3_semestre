// variaveis
var animal = "gato";
console.log(animal);

let nomeCompleto = "Fulano da Silva";
console.log(nomeCompleto);

var valor0 = 2;
const valor1 = 10;

console.log(valor1);
valor0 = 3;

// verificar tipo da variável
console.log(typeof valor0);


// impressão
// console.log
// template literal
console.log(`Seja bem-vindo ${nomeCompleto}, Aproveite a estadia!`);

// algoritimo: entrada + processamento + saída
// entrada de dados
var nome = window.prompt("digite seu nome: ");
document.writeln(`Seja bem-vindo ${nome}, Aproveite a estadia!`);

// operadores aritméticos
// + - * / **

// operadores de comparação
// < > != == === !==
console.log(5 == '5'); //olha apenas para valores
console.log(5 === '5'); //olha para tipo e valor E - LÓGICO

// Criar um sistema que realize a soma de dois números
// Ousuário deve informar quais são os números

var num1 = parseFloat(window.prompt("Digite um número para fazer a somatória"));
var num2 = Number(window.prompt("Digite um segundo número"));
var resultado = num1 + num2;
document.writeln(`O resultado de ${num1} + ${num2} é: ${resultado}`);

// estrutura de console (if-else)
if (resultado >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}
