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
    var idUsuario = req.body.idUsuarioServer;
    var erro = req.body.erroServer;
    var bom = req.body.bomServer;
    var melhor = req.body.melhorServer;
    var pontos = req.body.pontosServer;

    if (erro == undefined) {
        res.status(400).send("erro está undefined!");
    }
    else if (bom == undefined) {
        res.status(400).send("bom está undefined!");
    }
    else if (melhor == undefined) {
        res.status(400).send("melhor está undefined!");
    }
    else if (pontos == undefined) {
        res.status(400).send("pontos está undefined!");
    }
    else if (idUsuario == undefined) {
        res.status(400).send("idUsuario está undefined!");
    }

    praticaModel.cadastrar(erro, bom, melhor, pontos, idUsuario)
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