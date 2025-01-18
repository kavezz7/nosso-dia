// script.js

// Função para adicionar uma nova programação
function addProgram() {
    const programName = document.getElementById('program-name').value;
    const programDate = document.getElementById('program-date').value;
    
    // Verificar se os campos não estão vazios
    if (programName === "" || programDate === "") {
        alert("Por favor, preencha todos os campos!");
        return;
    }
    
    // Criar um objeto de programação
    const program = {
        name: programName,
        date: programDate
    };

    // Obter as programações salvas no LocalStorage
    let programs = localStorage.getItem('programs');
    programs = programs ? JSON.parse(programs) : [];

    // Adicionar a nova programação à lista
    programs.push(program);

    // Salvar a lista atualizada de programações no LocalStorage
    localStorage.setItem('programs', JSON.stringify(programs));

    // Limpar os campos de entrada
    document.getElementById('program-name').value = '';
    document.getElementById('program-date').value = '';

    // Recarregar a lista de programações
    loadPrograms();
}

// Função para carregar as programações salvas do LocalStorage
function loadPrograms() {
    // Obter as programações salvas no LocalStorage
    let programs = localStorage.getItem('programs');
    programs = programs ? JSON.parse(programs) : [];

    // Limpar a lista antes de renderizar
    const ul = document.getElementById('programs');
    ul.innerHTML = '';

    // Adicionar as programações à lista
    programs.forEach((program, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${program.name}</span> - <strong>${program.date}</strong>
            <button onclick="deleteProgram(${index})">Excluir</button>
        `;
        ul.appendChild(li);
    });
}

// Função para excluir uma programação
function deleteProgram(index) {
    // Obter as programações salvas no LocalStorage
    let programs = localStorage.getItem('programs');
    programs = programs ? JSON.parse(programs) : [];

    // Remover a programação da lista
    programs.splice(index, 1);

    // Atualizar o LocalStorage com a lista modificada
    localStorage.setItem('programs', JSON.stringify(programs));

    // Recarregar a lista de programações
    loadPrograms();
}

// Carregar as programações ao abrir a página
document.addEventListener('DOMContentLoaded', loadPrograms);
