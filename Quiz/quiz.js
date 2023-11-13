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

    if (resposta == 'melhorRespost'){
        melhor += 2;
    } else if (listaBom1.indexOf(resposta) >= 0){
        bom += 1;
    } else {
        erro -= 1;
    }

    input_resposta.value = '';
    div_img.innerHTML = ``; //Imagem segunda questão
    span_botaoConfirmar.innerHTML = `<button onclick="confirmar2()">Confirmar</button>`;
}
function confirmar2() {
    var resposta = input_resposta.value;

    if (resposta == 'melhorRespost'){
        melhor += 2;
    } else if (listaBom2.indexOf(resposta) >= 0){
        bom += 1;
    } else {
        erro -= 1;
    }

    input_resposta.value = '';
    div_img.innerHTML = ``; //Imagem terceira questão
    span_botaoConfirmar.innerHTML = `<button onclick="confirmar3()">Confirmar</button>`;
}
function confirmar3() {
    var resposta = input_resposta.value;

    if (resposta == 'melhorRespost'){
        melhor += 2;
    } else if (listaBom3.indexOf(resposta) >= 0){
        bom += 1;
    } else {
        erro -= 1;
    }

    input_resposta.value = '';
    div_img.innerHTML = ``; //Imagem quarta questão
    span_botaoConfirmar.innerHTML = `<button onclick="confirmar4()">Confirmar</button>`;
}
function confirmar4() {
    var resposta = input_resposta.value;

    if (resposta == 'melhorRespost'){
        melhor += 2;
    } else if (listaBom4.indexOf(resposta) >= 0){
        bom += 1;
    } else {
        erro -= 1;
    }

    input_resposta.value = '';
    div_img.innerHTML = ``; //Imagem quinta questão
    span_botaoConfirmar.innerHTML = `<button onclick="confirmar5()">Confirmar</button>`;
}
function confirmar5() {
    var resposta = input_resposta.value;

    if (resposta == 'melhorRespost'){
        melhor += 2;
    } else if (listaBom5.indexOf(resposta) >= 0){
        bom += 1;
    } else {
        erro -= 1;
    }
    
    // Inserir melhor, bom e erro no banco

    window.location.href = '../Resultado/resultado.html';
}