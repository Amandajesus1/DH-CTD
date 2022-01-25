-- CHECKPOINT BANCO DE DADOS 

create database imobiliaria;
use imobiliaria;

create table clientes (
id_cliente int primary key auto_increment not null,
nome_cliente varchar(100) not null,
Sobrenome_cliente varchar(100) not null,
rg varchar(30) not null,
cpf varchar(30) not null,
data_cadastro datetime
);
create table contatos (
id_contato int primary key auto_increment not null,
tipo varchar (20) not null,
contato varchar (100) not null, 
id_cliente int not null,
constraint fk_contatos_clientes foreign key(id_cliente) references clientes(id_cliente)
);
create table imoveis(
	id_imovel int primary key auto_increment not null,
    endereço varchar(100) not null,
    Cidade varchar(20) not null,
    UF char(2) not null,
    CEP varchar(20),
    id_cliente int not null,
    constraint fk_imoveis_cliente foreign key (id_cliente) references clientes(id_cliente)
  );
  create table contratos(
  id_contrato int primary key auto_increment not null,
  valor decimal (11,2) not null,
  id_proprietario int not null,
  id_cliente int not null,
  data_contrato datetime not null,
  previsão_pagamento date,
  id_imovel int null,
  constraint fk_contratos_imoveis foreign key (id_imovel) references imoveis(id_imovel),
  constraint fk_contratos_clientes foreign key (id_cliente) references clientes (id_cliente),
  constraint fk_contratos_clientesproprietarios foreign key (id_proprietario) references clientes (id_cliente)
  );
    