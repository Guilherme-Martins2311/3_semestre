let numero = parseFloat(window.prompt("Digite um número para saber sua tabuada"));

for(let i = 0; i <= 10; i++){
    n = numero * i;
    document.writeln(`${numero} x ${i} = ${n}<br>`);
};
