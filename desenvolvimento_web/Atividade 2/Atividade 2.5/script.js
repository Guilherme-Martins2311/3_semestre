let n = parseInt(prompt("Digite a quantidade de termos:"));

let termo = "";
let soma = 0;
let sequencia = "";

for (let i = 1; i <= n; i++) {
    termo += "1";
    let numero = parseInt(termo);

    soma += numero;

    sequencia += numero;
    if (i < n) {
        sequencia += " + ";
    }
}

document.writeln(sequencia + "<br>");
document.writeln("A soma é: " + soma);