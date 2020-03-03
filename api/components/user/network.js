const express = require('express');

const response = require('../../../network/response');
const Controller = require('./index');

const router = express.Router();

router.get('/', function(req, res) {
  Controller.list()
    .then((lista) => {
      response.succes(req, res, lista, 200);
    })
});

router.get('/:id', function(req, res) {
  const user = Controller.get(req.params.id);
  response.succes(req, res, user, 200);
});

module.exports = router;