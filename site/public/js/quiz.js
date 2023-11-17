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
        melhor += 2;
    } else {
        for (var cont1 = 0; cont1 < listaBom1.length; cont++) {
            if (resposta == listaBom1[cont1]){
                bom += 1;
            }
        } if (listaBom1.indexOf(resposta) < 0) {
            erro -= 1;
        }
    }

    input_resposta.value = '';
    div_img.innerHTML = `QUESTÃO 1`; //Imagem segunda questão
    span_botaoConfirmar.innerHTML = `<button onclick="confirmar2()">Confirmar</button>`;
}
function confirmar2() {
    var resposta = input_resposta.value;

    if (resposta == 'melhorRespost') {
        melhor += 2;
    } else {
        for (var cont1 = 0; cont1 < listaBom2.length; cont++) {
            if (resposta == listaBom2[cont1]){
                bom += 1;
            }
        } if (listaBom2.indexOf(resposta)) {
            erro -= 1;
        }
    }

    input_resposta.value = '';
    div_img.innerHTML = `QUESTÃO 2`; //Imagem terceira questão
    span_botaoConfirmar.innerHTML = `<button onclick="confirmar3()">Confirmar</button>`;
}
function confirmar3() {
    var resposta = input_resposta.value;

    if (resposta == 'melhorRespost') {
        melhor += 2;
    } else {
        for (var cont1 = 0; cont1 < listaBom3.length; cont++) {
            if (resposta == listaBom3[cont1]){
                bom += 1;
            }
        } if (listaBom3.indexOf(resposta)) {
            erro -= 1;
        }
    }

    input_resposta.value = '';
    div_img.innerHTML = `QUESTÃO 3`; //Imagem quarta questão
    span_botaoConfirmar.innerHTML = `<button onclick="confirmar4()">Confirmar</button>`;
}
function confirmar4() {
    var resposta = input_resposta.value;

    if (resposta == 'melhorRespost') {
        melhor += 2;
    } else {
        for (var cont1 = 0; cont1 < listaBom4.length; cont++) {
            if (resposta == listaBom4[cont1]){
                bom += 1;
            }
        } if (listaBom4.indexOf(resposta)) {
            erro -= 1;
        }
    }

    input_resposta.value = '';
    div_img.innerHTML = `QUESTÃO 4`; //Imagem quinta questão
    span_botaoConfirmar.innerHTML = `<button onclick="confirmar5()">Confirmar</button>`;
}
function confirmar5() {
    var resposta = input_resposta.value;

    if (resposta == 'melhorRespost') {
        melhor += 2;
    } else {
        for (var cont1 = 0; cont1 < listaBom5.length; cont++) {
            if (resposta == listaBom5[cont1]){
                bom += 1;
            }
        } if (listaBom5.indexOf(resposta)) {
            erro -= 1;
        }
    }

    // Inserir melhor, bom e erro no banco

    var pontos = (melhor + bom + erro) * 10;

    // Inserir pontos no banco

    window.location.href = '../Resultado/resultado.html';
}