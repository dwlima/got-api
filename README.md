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
h1. GOT House API This is a simple GOT API

*Version:* 1.0.0

----

{toc:printable=true|style=square|minLevel=2|maxLevel=3|type=list|outline=false|include=.*}

h2. Endpoints

    h3. addCharacter
    {status:colour=Yellow|title=post|subtle=false}
    {code}
    post /characters
    {code}
    *Summary:* Adiciona o personagem
    *Description:* Adiciona o personagem no banco


    h4. Parameters

        h5. Body Parameter
        ||Name||Description||Required||Default||Pattern||
        |characterItem |Personagem para adicionar |(x) | |  |







    h4. Responses
        *Status Code:* 200
        *Message:*     Item criado
        {code:title=Response Type}

        {code}
        See [#models]



        {code:title=Response Schema |collapse=true}
{
  "description" : "Item criado"
}
        {code}
    ----

    h3. deleteCharacter
    {status:colour=Yellow|title=delete|subtle=false}
    {code}
    delete /characters/{id}
    {code}
    *Summary:* Exclui o personagem
    *Description:* Exclui o personagem do banco


    h4. Parameters
        h5. Path Parameters
        ||Name||Description||Required||Default||Pattern||
        |id |ID do personagem |(/) | |  |








    h4. Responses
        *Status Code:* 200
        *Message:*     Item excluido
        {code:title=Response Type}

        {code}
        See [#models]



        {code:title=Response Schema |collapse=true}
{
  "description" : "Item excluido"
}
        {code}
    ----

    h3. editCharacter
    {status:colour=Yellow|title=put|subtle=false}
    {code}
    put /characters/{id}
    {code}
    *Summary:* Altera o personagem
    *Description:* Altera o personagem no banco


    h4. Parameters
        h5. Path Parameters
        ||Name||Description||Required||Default||Pattern||
        |id |ID do personagem |(/) | |  |


        h5. Body Parameter
        ||Name||Description||Required||Default||Pattern||
        |characterItem |Personagem para alterar |(x) | |  |







    h4. Responses
        *Status Code:* 200
        *Message:*     Item alterado
        {code:title=Response Type}

        {code}
        See [#models]



        {code:title=Response Schema |collapse=true}
{
  "description" : "Item alterado"
}
        {code}
    ----

    h3. getCharacter
    {status:colour=Yellow|title=get|subtle=false}
    {code}
    get /characters/{id}
    {code}
    *Summary:* Carrega um personagem
    *Description:* 


    h4. Parameters
        h5. Path Parameters
        ||Name||Description||Required||Default||Pattern||
        |id |ID do personagem |(/) | |  |








    h4. Responses
        *Status Code:* 200
        *Message:*     retorna um personagem
        {code:title=Response Type}
Character
        {code}
        See [#models]



        {code:title=Response Schema |collapse=true}
{
  "description" : "retorna um personagem",
  "schema" : {
    "$ref" : "#/definitions/Character"
  }
}
        {code}
    ----

    h3. listCharacters
    {status:colour=Yellow|title=get|subtle=false}
    {code}
    get /characters
    {code}
    *Summary:* Lista os personagens
    *Description:* 


    h4. Parameters







    h4. Responses
        *Status Code:* 200
        *Message:*     lista de personagens
        {code:title=Response Type}
array[Character]
        {code}
        See [#models]



        {code:title=Response Schema |collapse=true}
{
  "description" : "lista de personagens",
  "schema" : {
    "type" : "array",
    "items" : {
      "$ref" : "#/definitions/Character"
    }
  }
}
        {code}
    ----

    h3. addHouse
    {status:colour=Yellow|title=post|subtle=false}
    {code}
    post /houses
    {code}
    *Summary:* Adiciona a casa
    *Description:* Adiciona a casa no banco


    h4. Parameters

        h5. Body Parameter
        ||Name||Description||Required||Default||Pattern||
        |characterItem |Casa para adicionar |(x) | |  |







    h4. Responses
        *Status Code:* 200
        *Message:*     Item criado
        {code:title=Response Type}

        {code}
        See [#models]



        {code:title=Response Schema |collapse=true}
{
  "description" : "Item criado"
}
        {code}
    ----

    h3. deleteHouse
    {status:colour=Yellow|title=delete|subtle=false}
    {code}
    delete /houses/{id}
    {code}
    *Summary:* Exclui a casa
    *Description:* Exclui a casa do banco


    h4. Parameters
        h5. Path Parameters
        ||Name||Description||Required||Default||Pattern||
        |id |ID da casa |(/) | |  |








    h4. Responses
        *Status Code:* 200
        *Message:*     Item excluido
        {code:title=Response Type}

        {code}
        See [#models]



        {code:title=Response Schema |collapse=true}
{
  "description" : "Item excluido"
}
        {code}
    ----

    h3. editHouse
    {status:colour=Yellow|title=put|subtle=false}
    {code}
    put /houses/{id}
    {code}
    *Summary:* Altera a casa
    *Description:* Altera a casa no banco


    h4. Parameters
        h5. Path Parameters
        ||Name||Description||Required||Default||Pattern||
        |id |ID da casa |(/) | |  |


        h5. Body Parameter
        ||Name||Description||Required||Default||Pattern||
        |characterItem |Casa para alterar |(x) | |  |







    h4. Responses
        *Status Code:* 200
        *Message:*     Item alterado
        {code:title=Response Type}

        {code}
        See [#models]



        {code:title=Response Schema |collapse=true}
{
  "description" : "Item alterado"
}
        {code}
    ----

    h3. getHouse
    {status:colour=Yellow|title=get|subtle=false}
    {code}
    get /houses/{id}
    {code}
    *Summary:* Carrega uma casa
    *Description:* 


    h4. Parameters
        h5. Path Parameters
        ||Name||Description||Required||Default||Pattern||
        |id |ID da casa |(/) | |  |








    h4. Responses
        *Status Code:* 200
        *Message:*     retorna uma casa
        {code:title=Response Type}
HouseReturn
        {code}
        See [#models]



        {code:title=Response Schema |collapse=true}
{
  "description" : "retorna uma casa",
  "schema" : {
    "$ref" : "#/definitions/HouseReturn"
  }
}
        {code}
    ----

    h3. listHouses
    {status:colour=Yellow|title=get|subtle=false}
    {code}
    get /houses
    {code}
    *Summary:* Lista as casas
    *Description:* 


    h4. Parameters







    h4. Responses
        *Status Code:* 200
        *Message:*     lista de casas
        {code:title=Response Type}
array[House]
        {code}
        See [#models]



        {code:title=Response Schema |collapse=true}
{
  "description" : "lista de casas",
  "schema" : {
    "type" : "array",
    "items" : {
      "$ref" : "#/definitions/House"
    }
  }
}
        {code}
    ----

    h3. searchHouses
    {status:colour=Yellow|title=get|subtle=false}
    {code}
    get /houses?name&#x3D;{name}
    {code}
    *Summary:* Busca casa por nome
    *Description:* 


    h4. Parameters
        h5. Path Parameters
        ||Name||Description||Required||Default||Pattern||
        |name |Nome da casa |(/) | |  |








    h4. Responses
        *Status Code:* 200
        *Message:*     lista de casas
        {code:title=Response Type}
array[HouseReturn]
        {code}
        See [#models]



        {code:title=Response Schema |collapse=true}
{
  "description" : "lista de casas",
  "schema" : {
    "type" : "array",
    "items" : {
      "$ref" : "#/definitions/HouseReturn"
    }
  }
}
        {code}
    ----

h2. Models

        h3. Character
        ||Field Name||Required||Type||Description||
         |name | |String | |
 |seasons | |array[null] | |
        h3. House
        ||Field Name||Required||Type||Description||
         |name | |String | |
 |region | |String | |
 |founded | |String | |
 |currentLord | |String | |
        h3. HouseReturn
        ||Field Name||Required||Type||Description||
         |name | |String | |
 |region | |String | |
 |founded | |String | |
 |currentLord | |Character | |




