//CONTROLLEUR POUR OBTENIR LES AVIS
var mongoose = require("mongoose");
var Resto = mongoose.model("Resto");

module.exports.tousLesAvis = function(req, res) {
    //Obtenir les infos des avis via les paramètres de recherche
    var idResto = req.params.idResto;
    var idPoutine = req.params.idPoutine;
    Resto
        .findById(idResto)
        .select("menu")
        .exec(function(err, resto) {
            var poutine = resto.menu.id(idPoutine);
            res
                .status(200)
                .json(poutine.avis);
        });
};