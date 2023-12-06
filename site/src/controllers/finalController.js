var praticaModel = require("../models/praticaModel");

function listar(req, res) {
    praticaModel.listar().then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function cadastrar(req, res) {
    var idPratica = req.body.idPraticaServer;
    var rating = req.body.ratingServer;
    var avaliacao = req.body.avaliacaoServer;
    var titulo = req.body.tituloServer;

    if (rating == undefined) {
        res.status(400).send("rating está undefined!");
    }
    else if (avaliacao == undefined) {
        res.status(400).send("avaliacao está undefined!");
    }
    else if (titulo == undefined) {
        res.status(400).send("titulo está undefined!");
    }
    else if (idPratica == undefined) {
        res.status(400).send("idPratica está undefined!");
    }

    praticaModel.cadastrar(rating, avaliacao, titulo, pontos, idPratica)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
}

module.exports = {
    listar,
    cadastrar
}