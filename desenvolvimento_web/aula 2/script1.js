//eventos: propriedade

//onclick
let botao1 = document.getElementById("botao1");

//manipulador (comportamento para esse botão)
botao1.onclick = function(){
    console.log("Primeiro evento");
    alert("Primeiro Evento");
}

botao1.onclick = function(){
    botao1.texteContent = "Texto alterado";
}

//mouseover
let botao2 = document.getElementById("botao2");
botao2.onmouseover = function(){
    botao2.style.backgroundColor = "red";
}

//mouseout (tirar o mouse)
botao2.onmouseout = function(){
}