var express = require("express");
var router = express.Router();

var finalController = require("../controllers/finalController");

router.post("/cadastrar", function (req, res) {
    finalController.cadastrar(req, res);
});

router.get("/listar", function (req, res) {
    finalController.listar(req, res);
});

module.exports = router;