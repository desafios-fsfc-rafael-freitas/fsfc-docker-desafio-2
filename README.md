> Provendo página HTML com dados de um banco mysql através de uma API node com um proxy reverso (nginx)

# 📘 Infos

**O desafio** 

```
Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

<h1>Full Cycle Rocks!</h1>

- Lista de nomes cadastrada no banco de dados.

Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.

Suba tudo em um repositório e faça a entrega.
```


**Como rodar**

Executar o comando abaixo com o terminal no mesmo diretório que o arquivo docker-compose.yaml (raiz do projeto):

```bash
docker compose up -d
```


# 💻 Resultado esperado

> Ao consumir http:localhost:8080 uma página HTMl com nomes randomicos inseridos no banco mysql.
