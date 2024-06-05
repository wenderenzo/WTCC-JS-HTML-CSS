function addTask() {
    var input = document.getElementById("taskInput");
    var ul = document.getElementById("taskList");
    var li = document.createElement("li");
    // li.appendChild(document.createTextNode(input.value));
    var div = document.createElement("div");
    div.appendChild(document.createTextNode(input.value));
    div.classList.add("task");
    li.appendChild(div);
    
    // Botão de Remover
    var removeButton = document.createElement("button");
    removeButton.appendChild(document.createTextNode("🗑️"));
    removeButton.onclick = function () {
        this.parentNode.parentNode.removeChild(this.parentNode);
    };
    li.appendChild(removeButton);

    // Botão de Editar
    var editButton = document.createElement("button");
    editButton.appendChild(document.createTextNode("📝"));
    editButton.onclick = function () {
        var newText = prompt("Editar Tarefa", this.parentNode.firstChild.nodeValue);
        if (newText !== null) {
            this.parentNode.firstChild.nodeValue = newText;
        }
    };
    li.appendChild(editButton);

    // Botão de Concluir
    var completeButton = document.createElement("button");
    completeButton.appendChild(document.createTextNode("✅"));
    completeButton.onclick = function () {
        this.parentNode.classList.toggle("completed");
    };
    li.appendChild(completeButton);
    
    var divButtons = document.createElement("div");
    divButtons.appendChild(removeButton);
    divButtons.appendChild(editButton);
    divButtons.appendChild(completeButton);
    divButtons.classList.add("buttons");
    li.appendChild(divButtons);
    ul.appendChild(li);
    input.value = "";
}
