// script.js

function addProgram() {
    // Obter os valores dos inputs
    const programName = document.getElementById('program-name').value;
    const programDate = document.getElementById('program-date').value;
    
    // Verificar se os campos não estão vazios
    if (programName === "" || programDate === "") {
        alert("Por favor, preencha todos os campos!");
        return;
    }
    
    // Criar um novo item de lista
    const ul = document.getElementById('programs');
    const li = document.createElement('li');
    
    li.innerHTML = `<span>${programName}</span> - <strong>${programDate}</strong>`;
    
    // Adicionar o item à lista
    ul.appendChild(li);
    
    // Limpar os campos
    document.getElementById('program-name').value = '';
    document.getElementById('program-date').value = '';
}
