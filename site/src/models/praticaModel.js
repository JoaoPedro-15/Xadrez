var database = require("../database/config")

function listar() {
    var instrucao = `
        SELECT * FROM pratica;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(idUsuario, erro, bom, melhor, pontos) {
    var instrucao = `
        INSERT INTO pratica (fkUsuario, qtdErro, qtdBom, qtdMelhor, pontos) VALUES ('${idUsuario}', '${erro}', '${bom}', '${melhor}', '${pontos}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar
};