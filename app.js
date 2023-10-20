'use strict'

document.getElementById('receberConselhos').addEventListener('click', function() {
    const nome = document.getElementById('name').value
    if (nome.trim() === "") {
        alert("Por favor, insira seu nome: ")
        return
    }

    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            const exibir = document.getElementById('exibir');
            exibir.innerText = `Olá, ${nome}! Aqui está um conselho motivacional para você:\n\n${data.slip.advice}`
        })
        .catch(error => console.error('Erro ao obter conselho:', error))
})