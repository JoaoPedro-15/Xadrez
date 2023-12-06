var melhorVar = 0; 
var bomVar = 0; 
var erroVar = 0; 

var listaBom1 = ['TxTe8', 'DxTe8', 'DxDa6', 'PxDa6'];
var listaBom2 = ['PxCd3', 'PxDb3', 'DxTh7'];
var listaBom3 = ['CxDa5', 'CxTa3', 'BxBd1', 'PxCb5'];
var listaBom4 = ['BxTf1', 'CxDd1', 'CxPa2'];
var listaBom5 = ['PxBb4', 'BxCa6', 'DxDf7'];

function confirmar1() {
    var ipt_resposta = input_resposta.value;

    if (ipt_resposta == 'Dg1') {
        melhorVar ++;
    } else {
        for (var cont = 0; cont < listaBom1.length; cont++) {
            if (ipt_resposta == listaBom1[cont]){
                bomVar ++;
            }
        } if (listaBom1.indexOf(ipt_resposta) < 0) {
            erroVar ++;
        }
    }

    input_resposta.value = '';
    div_questao.innerHTML = `
    <div class="content light-bg">
        <img src="./assets/imgs/questao2.png">
        <h3>Pretas Jogam</h3>
    </div>
    <div class="content dark-bg" style="padding: 10px;">
        <span>Resposta:</span>
        <input id="input_resposta" placeholder="Insira sua resposta"><br>
        <button onclick="confirmar2()">Confirmar</button>
    </div>;`
   
}

function confirmar2() {
    var ipt_resposta = input_resposta.value;

    if (ipt_resposta == 'DxDb3') {
        melhorVar ++;
    } else {
        for (var cont = 0; cont < listaBom2.length; cont++) {
            if (ipt_resposta == listaBom2[cont]){
                bomVar ++;
            }
        } if (listaBom2.indexOf(ipt_resposta) < 0) {
            erroVar ++;
        }
    }

    div_questao.innerHTML = `
    <div class="content light-bg">
        <img src="./assets/imgs/questao3.png">
        <h3>Pretas Jogam</h3>
    </div>
    <div class="content dark-bg" style="padding: 10px;">
        <span>Resposta:</span>
        <input id="input_resposta" placeholder="Insira sua resposta"><br>
        <button onclick="confirmar3()">Confirmar</button>
    </div>`;
}

function confirmar3() {
    var ipt_resposta = input_resposta.value;

    if (ipt_resposta == 'TxBd1') {
        melhorVar ++;
    } else {
        for (var cont = 0; cont < listaBom3.length; cont++) {
            if (ipt_resposta == listaBom3[cont]){
                bomVar ++;
            }
        } if (listaBom3.indexOf(ipt_resposta) < 0) {
            erroVar ++;
        }
    }

    div_questao.innerHTML = `
    <div class="content light-bg">
        <img src="./assets/imgs/questao4.png">
        <h3>Pretas Jogam</h3>
    </div>
    <div class="content dark-bg" style="padding: 10px;">
        <span>Resposta:</span>
        <input id="input_resposta" placeholder="Insira sua resposta"><br>
        <button onclick="confirmar4()">Confirmar</button>
    </div>`;
}

function confirmar4() {
    var ipt_resposta = input_resposta.value;

    if (ipt_resposta == 'Cd3') {
        melhorVar ++;
    } else {
        for (var cont = 0; cont < listaBom4.length; cont++) {
            if (ipt_resposta == listaBom4[cont]){
                bomVar ++;
            }
        } if (listaBom4.indexOf(ipt_resposta) < 0) {
            erroVar ++;
        }
    }

    div_questao.innerHTML = `
    <div class="content light-bg">
        <img src="./assets/imgs/questao5.png">
        <h3>Brancas Jogam</h3>
    </div>
    <div class="content dark-bg" style="padding: 10px;">
        <span>Resposta:</span>
        <input id="input_resposta" placeholder="Insira sua resposta"><br>
        <button onclick="confirmar5()">Confirmar</button>
    </div>`;
}

function confirmar5() {
    
    var ipt_resposta = input_resposta.value;

    if (ipt_resposta == 'Bb5') {
        melhorVar ++;
    } else {
        for (var cont = 0; cont < listaBom5.length; cont++) {
            if (ipt_resposta == listaBom5[cont]){
                bomVar ++;
            }
        } if (listaBom5.indexOf(ipt_resposta) < 0) {
            erroVar ++;
        }
    }

    var pontosVar = melhorVar * 2 + bomVar - erroVar;
    var idUsuario = sessionStorage.ID_USUARIO;

    fetch("/pratica/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idUsuarioServer: idUsuario,
            erroServer: erroVar,
            bomServer: bomVar,
            melhorServer: melhorVar,
            pontosServer: pontosVar
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO confirmar5()!")

        if (resposta.ok) {
                window.location = "./resultado.html";
        } else {
            console.log("Houve um erro ao tentar inserir os dados da pratica no banco!");

            resposta.text().then(texto => {
                console.erro(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}