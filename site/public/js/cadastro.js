function cadastrar() {
    div_erro_nome.innerHTML = '';
    div_erro_email.innerHTML = '';
    div_erro_senha.innerHTML = '';
    div_erro_confirmar_senha.innerHTML = '';

    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var nomeVar = input_nome.value;
    var emailVar = input_email.value;
    var senhaVar = input_senha.value;
    var confirmarSenhaVar = input_confirmar_senha.value;

    if (nomeVar == "" ||
      emailVar == "" ||
      senhaVar == "" ||
      confirmarSenhaVar == "") {
      if (nomeVar == ""){
        div_erro_nome.innerHTML = `Este campo é obrigatório`;
      } 
      if (emailVar == ""){
        div_erro_email.innerHTML = `Este campo é obrigatório`;
      } 
      if (senhaVar == ""){
        div_erro_senha.innerHTML = `Este campo é obrigatório`;
      }
      if (confirmarSenhaVar == "") {
        div_erro_confirmar_senha.innerHTML = `Este campo é obrigatório`;
      }
      return false;
    }
    if (senhaVar.length < 8){
        div_erro_senha.innerHTML += `A senha deve ter pelo menos 8 caracteres`;
        return false;
    }
    if (senhaVar != confirmarSenhaVar){
        div_erro_confirmar_senha.innerHTML += `As senhas não correspondem`;
        return false
    }

    // Enviando o valor da nova input
    fetch("/usuarios/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // crie um atributo que recebe o valor recuperado aqui
        // Agora vá para o arquivo routes/usuario.js
        nomeServer: nomeVar,
        emailServer: emailVar,
        senhaServer: senhaVar
      }),
    })
      .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
            window.location = "login.html";
        } else {
          throw "Houve um erro ao tentar realizar o cadastro!";
        }
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
      });

    return false;
  }
