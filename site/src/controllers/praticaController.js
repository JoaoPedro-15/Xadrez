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
    var erro = req.body.erro;
    var bom = req.body.bom;
    var melhor = req.body.melhor;
    var pontos = req.body.pontos;
    var idUsuario = req.body.idUsuario;

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

    praticaModel.cadastrar(idUsuario, erro, bom, melhor, pontos).then(function(resposta){
        res.status(200).send("pratica registrada com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    listar,
    cadastrar
}