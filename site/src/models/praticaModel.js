var database = require("../database/config")

function listar() {
    var instrucao = `
        SELECT * FROM pratica;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(erro, bom, melhor, pontos, idUsuario) {
    var instrucao = `
        INSERT INTO pratica (qtdErro, qtdBom, qtdMelhor, pontos, fkUsuario) VALUES ('${erro}', '${bom}', '${melhor}', '${pontos}', '${idUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar
};