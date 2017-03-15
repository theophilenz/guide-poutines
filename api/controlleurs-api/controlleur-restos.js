//Demande de contenu test
var restos = require("../donnees/restos_et_poutines.json")

//Exporter le module pour voir les restos
module.exports.tousRestos = function(req, res) {
    console.log("Controlleur pour voir tous les restos");
    res
        .status(200)
        .json(restos);
};

module.exports.restoUnique = function(req, res) {
    var resto = req.params.resto;
    console.log("On affiche le resto: " + resto);
    res
        .status(200)
        .json(restos[resto]);
}