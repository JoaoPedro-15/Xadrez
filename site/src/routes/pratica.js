var express = require("express");
var router = express.Router();

var praticaController = require("../controllers/praticaController");


router.post("/cadastrar", function (req, res) {
    praticaController.cadastrar(req, res);
})

// router.get("/listar", function (req, res) {
//     praticaController.listar(req, res);
// });

router.get("/listar/:idUsuario", function (req, res) {
    praticaController.listarPorUsuario(req, res);
});

module.exports = router;