<h1 align="center">
  <img alt="Fastfeet" title="Fastfeet" src=".github/logo.png" width="300px" />
</h1>

<h3 align="center">
  FastFeet - Gerenciador de Entregas
</h3>

<p align="center">
  <a href="#projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#instalação-e-execução">Instalação e execução</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#licença">Licença</a>
</p>

## Projeto

Esse projeto é uma aplicação completa (backend, frontend e mobile) para gerenciamente de entregas.
Ele faz parte do desafio final do bootcamp GoStack da <a href="https://rocketseat.com.br/" target="_blank">RocketSeat</a>.

## Instalação e Execução

### Backend e frontend

Instalação via docker containers.

1. No diretório `backend` copie o arquivo `.env.example` para `.env` e preenche as variaveis que faltam;

2. No diretório principal, rode o comando `docker-composer up` para criar os containers;

3. Rode o comando `docker-compose run fastfeet-app yarn sequelize db:migrate` para criar a base de dados;

4. Rode o comando `docker-compose run fastfeet-app yarn sequelize db:seed:all` para popular a base de dados; 

4. Acesse a aplicação pelo endereço `http://localhost:3333`. Usuário: `admin@fastfeet.com` Senha: `123456`.

### Mobile

1. No diretório `mobile` rode o comando `yarn` para instalar as dependecias;

2. Copie o arquivo `.env.example` para `.env`e altere as variaveis;

2. Rode o comando `yarn start`;

3. Rode o comando `yarn android`.


## Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
