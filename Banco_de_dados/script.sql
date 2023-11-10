create database xadrez;

use xadrez;

create table usuario (
	idUsuario int primary key auto_increment,
    nome varchar(45),
    email varchar(45),
    senha varchar(45),
    titulo varchar(45));
    
create table pratica (
	idPratica int primary key auto_increment,
    fkUsuario int,
    qtdErro int,
    qtdOk int,
    qtdBom int,
    qtdMelhor int,
    constraint fkU_p foreign key (fkUsuario) references usuario(idUsuario));

create table resultado (
	idResultado int auto_increment,
    fkPratica int,
    primary key(idResultado, fkPratica),
    pontos int,
    rating int,
    avaliacao varchar(45),
    constraint fkP_r foreign key (fkPratica) references pratica(idPratica));