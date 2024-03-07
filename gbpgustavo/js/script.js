function validar(){
    const nome = document.getElementById("nome");
    const profissao = document.getElementById("profissao");
    const email = document.getElementById("email");
    const cpf = document.getElementById("cpf");
    const telefone = document.getElementById("telefone");
}

if (nome.value == ""){
    alert("Erro: nome vazio!");
    return false;
}
if (profissao.value == ""){
    alert("Erro: profissao vazio!");
    return false;
}
if (email.value == ""){
    alert("Erro: email vazio!");
    return false;
}if (cpf.value == ""){
    alert("Erro: cpf vazio!");
    return false;
}
if (telefone.value == ""){
    alert("Erro: telefone vazio!");
    return false;
}