var database = require("../database/config")

function listar() {
    var instrucao = `
        SELECT * FROM final;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(idPratica, rating, avaliacao, titulo) {
    var instrucao = `
        INSERT INTO final (fkPratica, rating, avaliacao, titulo) VALUES ('${idPratica}', '${rating}', '${avaliacao}', '${titulo}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar
};