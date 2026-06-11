const text = `

> Inicializando sistema...

> Carregando memórias...

> Verificando compatibilidade...

Resultado: 100% compatível ❤️

> Buscando momentos especiais...

✔ Primeira conversa

✔ Muitas risadas

✔ Apoio mútuo

✔ Amor verdadeiro

Status final:

BUILD SUCCESSFUL

`;

let i = 0;

const terminal = document.getElementById("terminal-text");

function typeWriter() {

    if(i < text.length){

        terminal.innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter, 35);

    } else {

        document
        .getElementById("continueBtn")
        .classList
        .remove("hidden");

    }
}

typeWriter();

document
.getElementById("continueBtn")
.addEventListener("click", () => {

    document
    .getElementById("declaration")
    .classList
    .remove("hidden");

    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });

});
