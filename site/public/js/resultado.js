function carregar() {

    var idUsuario = sessionStorage.ID_USUARIO;

    fetch(`/pratica/listar/${idUsuario}`, {
        method: "GET",
    })
        .then(function (resposta) {
            resposta.json().then(function (dado) {
                p_erro.innerHTML = dado[0].qtdErro;
                p_bom.innerHTML = dado[0].qtdBom;
                p_melhor.innerHTML = dado[0].qtdMelhor;
                sessionStorage.PONTOS_PRATICA = dado[0].pontos;
                sessionStorage.ID_PRATICA = dado[0].idPratica;
            })
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });


    var avaliacao = '';
    var titulo = '';
    var pontos = sessionStorage.PONTOS_PRATICA;
    var rating = pontos * 20;

    if (pontos < 0) {
        avaliacao = 'Talvez seja melhor revisar os tutoriais e tentar denovo...';
        titulo = 'Iniciante';
    } else if (pontos < 5) {
        avaliacao = 'Muito bom! mas você pode fazer melhor.'
        titulo = 'Aspirante'
    } else {
        avaliacao = 'Parabéns agora você está pronto para jogar uma partida!'
        titulo = 'Formado'
    }
    
    p_avaliacao.innerHTML = avaliacao
    p_rating.innerHTML = rating
}