var should = require("should");
var request = require("request");
var chai = require("chai");
var expect = chai.expect;
var urlBase = "http://localhost:3000";
var house_id = "6198599046965211f927be78";

var houseTest = {
  name: "House Test 23",
  region: "Dorne",
  founded: "299",
  currentLord: "6196d75f26fcdc33ec97ce59"
}

describe("Casas",function(){

  it("Deve receber uma lista de casas",function(done){
    request.get(
      {
        url : urlBase + "/houses"
      },
      function(error, response, body){

        var _body = {};
        try{
          _body = JSON.parse(body);
        }
        catch(e){
          _body = {};
        }

        expect(response.statusCode).to.equal(200);

        expect(_body).that.is.an('array');

        done();
      }
    );
  });

  it("Deve adicionar uma casa vazia e não deve aceitar",function(done){
    request.post(
      {
        url : urlBase + "/houses/"
      },
      function(error, response, body){

        var _body = {};
        try{
          _body = JSON.parse(body);
        }
        catch(e){
          _body = {};
        }

        expect(response.statusCode).to.equal(200);

        expect(_body.error).to.equal('Preencha todos os campos');

        done();
      }
    );
  });

  it("Deve adicionar uma casa",function(done){
    request.post(
      {
        url : urlBase + "/houses/",
        json: houseTest
      },
      function(error, response, body){

        expect(response.statusCode).to.equal(200);
        house_id = body._id;

        expect(body).to.have.property('_id');
        done();
      }
    );
  });

  it("Deve consultar a casa",function(done){
    request.get(
      {
        url : urlBase + "/houses/" + house_id,
      },
      function(error, response, body){

        var _body = {};
        try{
          _body = JSON.parse(body);
        }
        catch(e){
          _body = {};
        }
       
        expect(response.statusCode).to.equal(200);

        expect(_body).to.have.property('_id');

        done();
      }
    );
  });

  it("Deve excluir a casa criada",function(done){
    request.delete(
      {
        url : urlBase + "/houses/" + house_id,
      },
      function(error, response, body){

        var _body = {};
        try{
          _body = JSON.parse(body);
        }
        catch(e){
          _body = {};
        }
       
        expect(response.statusCode).to.equal(200);

        done();
      }
    );
  });

});