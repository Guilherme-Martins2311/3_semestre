let n = parseFloat(window.prompt("Digite o número de linhas da pirâmide:"));

for(let i = 1; i <= n; i++){
    let texto = "";

    for (let j = 1; j <= i; j++) {
        texto += "*";
    }
    
    document.writeln(`${texto}<br>`);
}
