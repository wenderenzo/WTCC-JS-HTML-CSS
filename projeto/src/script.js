function addTask() {
    var input = document.getElementById("taskInput");
    var ul = document.getElementById("taskList");
    var li = document.createElement("li");
    var div = document.createElement("div");

    div.appendChild(document.createTextNode(input.value));
    div.classList.add("task");
    li.appendChild(div);

    // Botão de Remover
    var removeButton = document.createElement("button");
    removeButton.appendChild(document.createTextNode("🗑️"));
    removeButton.onclick = function () {
    var listItem = this.parentNode.parentNode; // obtém o elemento <li> pai do botão
    listItem.parentNode.removeChild(listItem); // remove o <li> da lista
}
    // Botão de Editar
    var editButton = document.createElement("button");
    editButton.appendChild(document.createTextNode("📝"));
    editButton.onclick = function () {
        var divTask = this.parentNode.previousSibling; // Seleciona o elemento div que contém o texto da tarefa
        var newText = prompt("Editar Tarefa", divTask.textContent); // Pede ao usuário para editar o texto
        if (newText !== null) {
            divTask.textContent = newText; // Atualiza o texto da tarefa com o novo valor
        }
    };

    // Botão de Concluir
    var completeButton = document.createElement("button");
    completeButton.appendChild(document.createTextNode("✅"));
    completeButton.onclick = function () {
        this.parentNode.classList.toggle("completed");
    };

    var divButtons = document.createElement("div");
    divButtons.appendChild(removeButton);
    divButtons.appendChild(editButton);
    divButtons.appendChild(completeButton);
    divButtons.classList.add("buttons");
    li.appendChild(divButtons);
    ul.appendChild(li);
    input.value = "";
}
