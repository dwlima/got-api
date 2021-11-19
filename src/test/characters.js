var should = require("should");
var request = require("request");
var chai = require("chai");
var expect = chai.expect;
var urlBase = "http://localhost:3000";

describe("Lista personagens",function(){

  it("Deve receber uma lista de personagens",function(done){
    request.get(
      {
        url : urlBase + "/characters"
      },
      function(error, response, body){

        // precisamos converter o retorno para um objeto json
        var _body = {};
        try{
          _body = JSON.parse(body);
        }
        catch(e){
          _body = {};
        }

        // sucesso na chamada
        expect(response.statusCode).to.equal(200);

        expect(_body).that.is.an('array');

        done();
      }
    );
  });

});