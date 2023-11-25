var melhor = 0; // Quantidade de melhores respostas durante um quiz
var bom = 0; // Quantidade de boas respostas durante um quiz
var erro = 0; // Quantidade de erros durante um quiz

var listaBom1 = [
    // Inserir respostas boas da primeira questao
];
var listaBom2 = [
    // Inserir respostas boas da segunda questao
];
var listaBom3 = [
    // Inserir respostas boas da terceira questao
];
var listaBom4 = [
    // Inserir respostas boas da quarta questao
];
var listaBom5 = [
    // Inserir respostas boas da quinta questao
];

function confirmar1() {
    var resposta = input_resposta.value;

    if (resposta == 'melhorRespost') {
        melhor ++;
    } else {
        for (var cont1 = 0; cont1 < listaBom1.length; cont++) {
            if (resposta == listaBom1[cont1]){
                bom ++;
            }
        } if (listaBom1.indexOf(resposta) < 0) {
            erro ++;
        }
    }

    input_resposta.value = '';
    div_questao.innerHTML = `
    <div class="content light-bg">
        <img src="" alt="questao2">
    </div>
    <div class="content dark-bg" style="width: 300px; height: 150px;">
        <span>Resposta:</span>
        <input id="input_resposta" placeholder="Insira sua resposta">
        <button onclick="confirmar2()">Confirmar</button>
    </div>;`
   
}

function confirmar2() {
    var resposta = input_resposta.value;

    if (resposta == 'melhorRespost') {
        melhor ++;
    } else {
        for (var cont1 = 0; cont1 < listaBom2.length; cont++) {
            if (resposta == listaBom2[cont1]){
                bom ++;
            }
        } if (listaBom2.indexOf(resposta)) {
            erro ++;
        }
    }

    div_questao.innerHTML = `
    <div class="content light-bg">
        <img src="" alt="questao3">
    </div>
    <div class="content dark-bg" style="width: 300px; height: 150px;">
        <span>Resposta:</span>
        <input id="input_resposta" placeholder="Insira sua resposta">
        <button onclick="confirmar3()">Confirmar</button>
    </div>`;
}

function confirmar3() {
    var resposta = input_resposta.value;

    if (resposta == 'melhorRespost') {
        melhor ++;
    } else {
        for (var cont1 = 0; cont1 < listaBom3.length; cont++) {
            if (resposta == listaBom3[cont1]){
                bom ++;
            }
        } if (listaBom3.indexOf(resposta)) {
            erro ++;
        }
    }

    div_questao.innerHTML = `
    <div class="content light-bg">
        <img src="" alt="questao4">
    </div>
    <div class="content dark-bg" style="width: 300px; height: 150px;">
        <span>Resposta:</span>
        <input id="input_resposta" placeholder="Insira sua resposta">
        <button onclick="confirmar4()">Confirmar</button>
    </div>`;
}

function confirmar4() {
    var resposta = input_resposta.value;

    if (resposta == 'melhorRespost') {
        melhor ++;
    } else {
        for (var cont1 = 0; cont1 < listaBom4.length; cont++) {
            if (resposta == listaBom4[cont1]){
                bom ++;
            }
        } if (listaBom4.indexOf(resposta)) {
            erro ++;
        }
    }

    div_questao.innerHTML = `
    <div class="content light-bg">
        <img src="" alt="questao5">
    </div>
    <div class="content dark-bg" style="width: 300px; height: 150px;">
        <span>Resposta:</span>
        <input id="input_resposta" placeholder="Insira sua resposta">
        <button onclick="confirmar5()">Confirmar</button>
    </div>`;
}

function confirmar5() {
    var resposta = input_resposta.value;

    if (resposta == 'melhorRespost') {
        melhor ++;
    } else {
        for (var cont1 = 0; cont1 < listaBom5.length; cont++) {
            if (resposta == listaBom5[cont1]){
                bom ++;
            }
        } if (listaBom5.indexOf(resposta)) {
            erro ++;
        }
    }

    // Inserir melhor, bom e erro no banco

    var pontos = melhor * 2 + bom - erro;

    // Inserir pontos no banco

    window.location.href = './resultado.html';
}