let numero;
var opcao;

while(true){
    numero = Math.floor(Math.random() * 3) + 1;
    var numeroEscolhido = parseFloat(window.prompt("Escolha uma das opções:\n1-pedra\n2-papel\n3-tesoura"));

    if(numero == numeroEscolhido){
        opcao = parseFloat(window.prompt("Empate! O sistema escolheu a mesma opção que você. Deseja continuar?\n1-Sim\n 2-Não"));
    } else if (
        (numero == 1 && numeroEscolhido == 2) ||
        (numero == 2 && numeroEscolhido == 3) ||
        (numero == 3 && numeroEscolhido == 1)
    ){
        opcao = parseFloat(window.prompt("Você venceu! Deseja continuar?\n1-Sim\n 2-Não"));
    } else{
        opcao = parseFloat(window.prompt("Você perdeu! Deseja continuar?\n1-Sim\n 2-Não"));
    }
    if (opcao == 2){
        break;
    }
}