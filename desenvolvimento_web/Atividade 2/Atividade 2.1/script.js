let numeroAleatorio = Math.floor(Math.random() * 20) + 1;

var numeroEscolhido = parseFloat(window.prompt("Digite um número entre 1 e 20:"));

while(true){
    if (numeroEscolhido < numeroAleatorio){
        numeroEscolhido = parseFloat(window.prompt("O número que você digitou é menor, digite um próximo número:"));

    } else if(numeroEscolhido > numeroAleatorio){
        numeroEscolhido = parseFloat(window.prompt("O número que você digitou é maior, digite um próximo número:"));
    } else {
        numeroEscolhido == numeroAleatorio;
        break;
    }
}

document.writeln(`Você acertou o número: ${numeroAleatorio}`);
