const classe = document.getElementById("classe")
const imagem = document.getElementById("img")

function trocarImagem() {
    switch (classe.value.toLowerCase()) { 
        case 'loveyou':
            imagem.src = './personagens/loveyou.png';
            break;
        case 'trojan':
            imagem.src = './personagens/trojan.png';
            break;
        case 'grabber':
            imagem.src = './personagens/grabber.png';
            break;
    }
}
classe.addEventListener("input", trocarImagem);

classe.addEventListener("input", () => {
    const valor = classe.value.toLowerCase();

    document.body.classList.remove("loveyou", "trojan", "grabber");

    if (valor === "") {
        limparTela();
        return;
    }

    if (valor === "trojan") {
        document.body.classList.add("trojan");
    }
});


// 🔥 COLE AQUI (FORA DO EVENTO)
function limparTela() {

    document.querySelectorAll("input").forEach(input => {
        if (input.id !== "classe") {
            input.value = "";
        }
    });

    document.querySelectorAll("textarea").forEach(t => t.value = "");

    const img = document.getElementById("img");
    if (img) img.src = "";

    document.body.classList.remove("loveyou", "trojan", "grabber");
}

// 🔥 COLE AQUI
classe.addEventListener("input", () => {

    const valor = classe.value.toLowerCase();

    document.body.classList.remove("loveyou", "trojan", "grabber");

    if (valor === "loveyou" || valor === "iloveyou") {
        document.body.classList.add("loveyou");
    }

    else if (valor === "trojan") {
        document.body.classList.add("trojan");
    }

    else if (valor === "grabber") {
        document.body.classList.add("grabber");
    }
});

// Pegando TODOS os inputs na ordem do HTML
const inputs = document.querySelectorAll("input");

// Topo
const nomePersonagem = inputs[0];
const nomeJogador = inputs[1];
const xp = inputs[2];
const raca = inputs[3];
const classeInput = inputs[4];
const alinhamento = inputs[5];

// Atributos
const forca = inputs[6];
const destreza = inputs[7];
const constituicao = inputs[8];
const inteligencia = inputs[9];
const sabedoria = inputs[10];
const carisma = inputs[11];

// Status
const vida = inputs[12];
const defesa = inputs[13];
const velocidade = inputs[14];

// Textareas
const biografia = document.querySelectorAll("textarea")[0];
const equipamentos = document.querySelectorAll("textarea")[1];
const caracteristicas = document.querySelectorAll("textarea")[2];

function trocarDados() {

    switch (classe.value.toLowerCase()) {

        case "loveyou":

            nomePersonagem.value = "ILOVEYOU";
            nomeJogador.value = "Malware Histórico";
            xp.value = "Altíssimo";
            raca.value = "Worm";
            alinhamento.value = "Malicioso";

            forca.value = 7;
            destreza.value = 9;
            constituicao.value = 6;
            inteligencia.value = 8;
            sabedoria.value = 5;
            carisma.value = 10;

            vida.value = 80;
            defesa.value = 40;
            velocidade.value = 95;

            biografia.value = "Um dos vírus mais famosos da história, espalhado por e-mail e responsável por milhões em prejuízo.";
            equipamentos.value = "Anexos de e-mail, engenharia social";
            caracteristicas.value = "Alta propagação, enganoso, rápido";
            break;


        case "trojan":


            nomePersonagem.value = "Trojan";
            nomeJogador.value = "Categoria Malware";
            xp.value = "Muito alto";
            raca.value = "Cavalo de Troia";
            alinhamento.value = "Malicioso";

            forca.value = 6;
            destreza.value = 7;
            constituicao.value = 8;
            inteligencia.value = 9;
            sabedoria.value = 8;
            carisma.value = 6;

            vida.value = 85;
            defesa.value = 70;
            velocidade.value = 60;

            biografia.value = "Disfarça-se de programa legítimo para invadir sistemas.";
            equipamentos.value = "Softwares falsos, downloads infectados";
            caracteristicas.value = "Infiltração, persistência, ocultação";
            break;


        case "grabber":

            nomePersonagem.value = "Grabber";
            nomeJogador.value = "Stealer";
            xp.value = "Alto";
            raca.value = "Ladrão de dados";
            alinhamento.value = "Malicioso";

            forca.value = 5;
            destreza.value = 8;
            constituicao.value = 6;
            inteligencia.value = 9;
            sabedoria.value = 7;
            carisma.value = 4;

            vida.value = 70;
            defesa.value = 50;
            velocidade.value = 85;

            biografia.value = "Especializado em roubar senhas e dados pessoais.";
            equipamentos.value = "Keyloggers, scripts de captura";
            caracteristicas.value = "Furtivo, rápido, focado em dados";
            break;
    }
}
classe.addEventListener("input", trocarDados);
