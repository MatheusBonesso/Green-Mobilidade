# projeto-iterative
Se tem a Yellow porque não a Green?

Projeto para aluguel de veículos em Angular2+ consumindo API SpringBoot
Este projeto foi criado com o intuito de fazer uma listagem de veículos a partir de uma API externa, fazer o aluguel do veículo, 
e fazer a totalização do preço por tempo utilizado.

A aplicação usa para o backend um projeto em Spring Boot que foi gerado no site start.spring.io, a versão do Spring utilizada é a 2.2.0,
as dependências são controladas pelo Maven e são as seguintes: Spring Web, DevTools.
Está sendo utilizado JPA para comunicação com um banco de dados em memória, H2, que está inicialmente populado com os veículos, um arquivo data.sql
na pasta Resources que realiza a população do banco. 

Para o Front-end foi utilizado Angular2+ com BootStrap 4, as rotas da aplicação podem ser acessadas pelo menu superior, mas basicamente há
/veículos para listar todos os veículos disponíveis, /corridas para listar todas as corridas ativas e onde pode ser realizado o cancelamento
da corrida, /financeiro que mostra o resumo financeiro de todos os veículos e /alugar que pede e-mail para alugar um veículo.

A aplicação está simples e consumindo todos os tipos de requisições(GET, PUT, POST, delete não desculpa) sei que precisa de muitas melhorias 
mas foi a primeira aplicação que fiz em Angular e Spring Boot e foi a primeira vez que realizei essa integração.

Quero agradecer a Iterative por me proporcionar este desafio, com certeza tive muitas dificuldades mas ganhei um conhecimento que nunca vou me esquecer
e com certeza ficarei feliz em passar para outras pessoas.
