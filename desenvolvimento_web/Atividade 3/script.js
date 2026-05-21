let contador = 0;

function somar() {
    contador++;
    document.getElementById("numero").innerText = contador;
}

function subtrair() {
    if (contador > 0) {
        contador--;
        document.getElementById("numero").innerText = contador;
    } else {
        alert("O contador já está em zero!");
    }
}

let input = document.getElementById("texto");

input.addEventListener("keyup", function(event) {
    let texto = input.value;

    document.getElementById("contagem").innerText =
        texto.replace(/\s/g, "").length + " caracteres";

    if (event.key === "Enter" && texto !== "") {
        let p = document.createElement("p");
        p.innerText = texto;
        document.getElementById("listaTexto").appendChild(p);

        input.value = "";
        document.getElementById("contagem").innerText = "0 caracteres";
    }
});

function criarLista() {
    let tipo = document.getElementById("tipo").value;
    let lista = document.createElement(tipo);

    for (let i = 1; i <= 3; i++) {
        let item = document.createElement("li");
        item.innerText = "Item " + i;
        lista.appendChild(item);
    }

    document.getElementById("listas").appendChild(lista);
}

function resetar() {
    contador = 0;
    document.getElementById("numero").innerText = 0;

    document.getElementById("listaTexto").innerHTML = "";
    document.getElementById("listas").innerHTML = "";

    input.value = "";
    document.getElementById("contagem").innerText = "0 caracteres";
}