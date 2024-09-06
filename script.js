function adicionarContato() {
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;

    var telefoneValido = /^[0-9]+$/.test(telefone);

    if (nome && telefone && telefoneValido) {
        var tabela = document.getElementById("tabelaContatos").getElementsByTagName('tbody')[0];
        var novaLinha = tabela.insertRow();

        var celulaNome = novaLinha.insertCell(0);
        var celulaTelefone = novaLinha.insertCell(1);

        celulaNome.innerHTML = nome;
        celulaTelefone.innerHTML = telefone;

        document.getElementById("nome").value = '';
        document.getElementById("telefone").value = '';
    } else {
        if (!telefoneValido) {
            alert("Por favor, insira apenas números no campo de telefone.");
        } else {
            alert("Por favor, preencha ambos os campos.");
        }
    }
}
