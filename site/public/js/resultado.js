function carregar() {

    var idUsuario = sessionStorage.ID_USUARIO;

    fetch(`/pratica/listar/${idUsuario}`, {
        method: "GET",
    })
        .then(function (resposta) {
            resposta.json().then(function (dado){
                div_resultado.innerHTML = dado[0].qtdErro;
                div_resultado.innerHTML += dado[0].qtdBom;
                div_resultado.innerHTML += dado[0].qtdMelhor;
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
    var ratingVar = pontos * 20;

    // if (SOMARATING < 200 || SOMARATING == 'undefined'){
    //     titulo = 'Iniciante';
    // } else if (SOMARATING < 400){
    //     titulo = 'Aspirante';
    // } else if (SOMARATING < 600){
    //     titulo = 'Veterano';
    // } else{
    //     titulo = 'Mestre';
    // }

    if (pontos < 0) {
        avaliacao = 'Talvez seja melhor revisar os tutoriais e tentar denovo...'
    } else if (pontos < 5) {
        avaliacao = 'Muito bom! mas você pode fazer melhor.'
    } else {
        avaliacao = 'Parabéns agora você está pronto para jogar uma partida!'
    }

    var idPratica = sessionStorage.ID_PRATICA;
    var avaliacaoVar = avaliacao;
    var tituloVar = titulo;

    fetch("/final/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idPraticaServer: idPratica,
            ratingServer: ratingVar,
            avaliacaoServer: avaliacaoVar,
            tituloServer: tituloVar
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO carregar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
                sessionStorage.RATING_FINAL = json.rating;
                sessionStorage.AVALIACAO_FINAL = json.avaliacao;
                sessionStorage.TITULO_FINAL = json.titulo;
                sessionStorage.ID_FINAL = json.idPratica;

                window.location = "./home.html";
            });

        } else {
            console.log("Houve um erro ao tentar inserir os dados do final no banco!");

            resposta.text().then(texto => {
                console.error(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })
    return false;
}