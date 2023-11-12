function cadastrar() {
    div_msg.innerHTML = '';

    var nome = input_nome.value;
    var email = input_email.value;
    var senha = input_senha.value;
    var confirmarSenha = input_confirmarSenha.value;

    if (nome == '' || (email.indexOf('@') < 0 || email.indexOf('.')) < 0 || senha.length < 8 || senha != confirmarSenha){
        if(nome == ''){
            div_msg.innerHTML += `É necessário inserir um nome<br>`;
        }
        if (email.indexOf('@') < 0 || email.indexOf('.') < 0){
            div_msg.innerHTML += `Insira um email válido<br>`;
        }
        if (senha.length < 8){
            div_msg.innerHTML += `A senha deve ter prlo menos 8 digitos<br>`;
        }
        if (senha != confirmarSenha){
            div_msg.innerHTML += `As senhas não correspondem<br>`;
        }
    }else {
        // Cadastrar no banco

        window.location.href = '../Login/login.html'
    }
}