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
function listarPorUsuario(idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()");
    var instrucao = ` select * from pratica where fkUsuario = ${idUsuario} order by idPratica desc limit 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listarPorUsuario,
    listar
};