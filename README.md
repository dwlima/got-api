# GOT Simple API

API que permite administrar personagens e casas de Game of Thrones;

Projeto desenvolvido com NodeJS e MongoDB.

## Configuração
Para configurar o acesso ao banco de dados, altere a variável "connectionString" no arquivo /src/config.json para sua nova string de conexão.
(caso queira pode deixar a configuração como está pois o banco está online)


## Build
Abra seu terminal na pasta do projeto e execute:

``` shell
npm install
```
ou
``` shell
yarn install
```

## Rodar o projeto
Para rodar o projeto basta executar no terminal na pasta raiz do projeto o comando:

``` shell
npm start
```
ou

``` shell
yarn start
```


A aplicação poderá ser acessada em: http://localhost:3000/


## Docker
Para rodar o projeto no docker primeiro será necessário criar o container com o projeto. No terminal na raiz do projeto execute o comando abaixo: 

``` shell
docker build -t {nome_do_usuario_no_docker_hub}/got .
```
Após a criação do container, para rodar o projeto execute:

``` shell
docker run --name {container_name} -p 8080:3000 {nome_do_usuario_no_docker_hub}/got
```

Uma vez rodando para acessar a API utilize a URL:
http://localhost:8080/
(note que talvez tenha que substituir o localhost pelo ip atribuido ao docker)


Nas próximas vezes que quiser rodar o projeto basta executar:

``` shell
docker start {container_name}
```

Para parar de rodar o projeto execute:

``` shell
docker stop {container_name}
```


## API Endpoints

A documentação da api está no Swagger e pode ser acessada através do link abaixo:

https://app.swaggerhub.com/apis-docs/dwlima/GOT/1.0.0


A pasta apoio contém dois arquivos sobre a API.

Arquivo de documentação da API no Swagger

``` shell
api_definition_swagger.yaml
``` 


Arquivo de modelos de chamadas para importação no Insomnia (ou software semelhante)
``` shell
Insomnia_GOT.json
```