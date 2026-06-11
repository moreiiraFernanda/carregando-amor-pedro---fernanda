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

function updateCounter() {

    const startDate = new Date("2023-10-22");

    const now = new Date();

    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    document.getElementById("loveCounter").innerText =
        days + " dias ❤️";
}

updateCounter();

const input = document.getElementById("commandInput");
const output = document.getElementById("output");

if (input && output) {

    input.addEventListener("keypress", function(e){

        if(e.key === "Enter"){

            const cmd = input.value.toLowerCase();

            if(cmd === "love"){

                output.innerHTML =
                "Você é meu lugar seguro ❤️";

            }

            else if(cmd === "future"){

                output.innerHTML =
                "Compilando futuro... sucesso!";

            }

            else if(cmd === "eu te amo"){

                output.innerHTML =
                "❤️ Eu também te amo ❤️";
            }

        }

    });

}

const programador = "Pedro";
const estudanteADS = "Fernanda";

function construirFuturo() {
    return "Juntos";
}
//Enquanto você transforma ideias em código e eu aprendo a construir sistemas, percebo que estamos desenvolvendo o projeto mais importante das nossas vidas. Um projeto que não precisa de correções, apenas de novas versões cheias de sonhos, conquistas e amor.
