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
    
    if (nome === "") {
        alert("Insira um nome!");
        return;
    }
    
    if (!nomesAmigos.includes(nome)) {
        nomesAmigos.push(nome);
        atualizarLista();
    }
    input.value = ""; 
}

function sortearAmigo(){
    let nomeSorteado = "";
    let indice = Math.floor(Math.random()*nomesAmigos.length);
    nomeSorteado = nomesAmigos[indice];
    
    resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    let li = document.createElement("li");
    li.textContent = `O amigo secreto sorteado é: ${nomeSorteado}`;
    resultado.appendChild(li);
}