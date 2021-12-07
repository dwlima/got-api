const express = require('express');

const CharacterController = require('./controllers/CharacterController');
const HouseController = require('./controllers/HouseController');
const TestController = require('./controllers/TestController');

const routes = new express.Router();

routes.get('/', (req, res) => {
  return res.send(`GOT API Server ok!`);
});


// teste
routes.get('/test/', TestController.index);

// characters
routes.get('/characters/', CharacterController.index);
routes.get('/characters/:id', CharacterController.show);
routes.post('/characters/', CharacterController.store);
routes.put('/characters/:id', CharacterController.update);
routes.delete('/characters/:id', CharacterController.delete);

// houses
routes.get('/houses/', HouseController.index);
routes.get('/houses/:id', HouseController.show);
routes.post('/houses/', HouseController.store);
routes.put('/houses/:id', HouseController.update);
routes.delete('/houses/:id', HouseController.delete);

module.exports = routes;
