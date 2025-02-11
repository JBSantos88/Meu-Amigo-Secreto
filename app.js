const nomesAmigos = [];

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < nomesAmigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = nomesAmigos[i];
        lista.appendChild(li);
    }
}

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();
    
    if (nome !== "" && !nomesAmigos.includes(nome)) {
        nomesAmigos.push(nome);
        atualizarLista();
        input.value = "";
    }
}
