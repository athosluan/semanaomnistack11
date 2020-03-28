const express = require('express');
const OngController = require('./controllers/ongcontroller');
const IncidentController = require('./controllers/incidentcontroller');
const ProfileController = require('./controllers/profilecontroller');
const SessionController = require('./controllers/sessioncontroller');


const route = express.Router();

route.get('/ongs', OngController.index);
route.post('/ongs', OngController.create);

route.get('/profile', ProfileController.index);
route.get('/incidents', IncidentController.index);
route.post('/incidents', IncidentController.create);
route.delete('/incidents/:id', IncidentController.delete);
route.delete('/incidents', IncidentController.deleteTodos);

route.post('/sessions', SessionController.create);

module.exports = route;