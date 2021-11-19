var should = require("should");
var request = require("request");
var chai = require("chai");
var expect = chai.expect;
var urlBase = "http://localhost:3000";
var house_id = null;

var houseTest = {
  name: "House Test 2",
  region: "Dorne",
  founded: "299",
  currentLord: "6196d75f26fcdc33ec97ce59"
}

describe("Lista casas",function(){

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

        // sucesso na chamada
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

        // sucesso na chamada
        expect(response.statusCode).to.equal(200);

        expect(_body.error).to.equal('Preencha todos os campos');

        done();
      }
    );
  });

  /*
  it('Deve adicionar uma casa', function(done) {
    request
      .post(urlBase + "/houses/")
      .send({ houseTest })
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) done(err);
        res.body.should.have.property('_id');
        //res.body.participant.should.have.property('nuid', '98ASDF988SDF89SDF89989SDF9898');

      });
    done();
  });

  it("Deve consultar a casa",function(done){
    request.get(
      {
        url : urlBase + "/houses/6196d295f1f7162ac548d9c4",
      },
      function(error, response, body){

        var _body = {};
        try{
          _body = JSON.parse(body);
        }
        catch(e){
          _body = {};
        }

        // sucesso na chamada
        expect(response.statusCode).to.equal(200);

        done();
      }
    );
  });
  */
});