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

3. Rode os comandos `xxxx` e `yyyyy` para criar e popular a base de dados; 

4. Acesso a aplicação pelo endereço `xxxx`, usuário: `mmmm` senha: `nnnnn`.

### Mobile

1. Antes de cancelar encomendas ou deletar qualquer registro do banco crie uma verificação adicinal usando a função `confirm` do JavaScript;

2. Para formatação de datas utilize sempre a biblioteca `date-fns`;
3. No cadastro/edição de encomendas deve ser possível buscar o entregador e o destinatário pelo nome. Utilize o método `async` da biblioteca [React Select](https://react-select.com/home#async). As encomendas devem ser buscadas da API assim que a página carregar e não devem possuir filtro.

## Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
