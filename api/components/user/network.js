const express = require('express');

const response = require('../../../network/response');

const router = express.Router();

router.get('/', function(req, res) {
  response.succes(req, res, 'Todo correcto', 200);
})

module.exports = router;