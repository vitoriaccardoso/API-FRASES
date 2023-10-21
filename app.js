'use strict'

//filosofo (''https://philosophy-quotes-api.glitch.me/quotes/author/{parameter} )
//frase aleatoria ('https://api.adviceslip.com/advic')


async function pegarFrases(url) {
    const response = await fetch(url);
    const frases = await response.json();
    return frases.slip.advice; 
}

function criarFrases(frase, destino) {
    const tagfrs = document.createElement('p');
    tagfrs.textContent = frase; 
    destino.innerHTML = '';
    destino.appendChild(tagfrs);
}

async function obterCitacao(filosofo) {
    const apiUrl = `https://philosophy-quotes-api.glitch.me/quotes/author/${filosofo}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const citacao = data[0].quote;

        console.log(`Citação de ${filosofo}: ${citacao}`);
        criarFrases(`Citação de ${filosofo}: ${citacao}`, document.getElementById('exibir'));
    } catch (error) {
        console.error('Erro ao obter citação:', error);
    }
}

document.getElementById('receberConselhos').addEventListener('click', async function() {
    const frase = await pegarFrases('https://api.adviceslip.com/advice');
    criarFrases(frase, document.getElementById('exibir'));
});

document.getElementById('obterFraseFilosofo').addEventListener('click', async function() {
    const filosofo = document.getElementById('filosofo').value.trim();

    if (filosofo === "") {
        alert("Por favor, insira o nome do filósofo.");
        return;
    }

    obterCitacao(filosofo)
})
