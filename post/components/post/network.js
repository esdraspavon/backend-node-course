const express = require("express");

const response = require("../../../network/response");
const Controller = require("./index");

const router = express.Router();

//routes
router.get("/", list);

//functions
function list(req, res, next) {
    Controller.list()
        .then(data => {
            response.success(req, res, data, 200);
        })
        .catch(next);
}

module.exports = router;