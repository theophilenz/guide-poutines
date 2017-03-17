//CONTROLLEUR POUR LES POUTINES
var mongoose = require("mongoose");
var Resto = mongoose.model("Resto");

//Obtenir un resto unique par son champ "url"
module.exports.tousPoutines = function(req, res) {
    //Obtenir les infos via les paramètres de recherche
    var idResto = req.params.idResto;
    Resto
        .findById(idResto)
        .exec(function(err, resto) {
            console.log("Le restaurant demandé est: " + resto.nom);
            if (err) {
                console.log("Erreur à trouver le resto");
                res
                    .status(500)
                    .json(err);
            } else if (!resto) {
                console.log("Aucun resto de la valeur de: " + idResto + " Trouvé");
                res
                    .status(404)
                    .json(err);
            }
            res
                .status(200)
                .json(resto.menu);
        });
};

//Obtenir une poutine unique par son ID
module.exports.unePoutine = function(req, res) {
    var idResto = req.params.idResto;
    var idPoutine = req.params.idPoutine;
    Resto
        .findById(idResto)
        .select("menu")
        .exec(function(err, resto) {
            var poutine = resto.menu.id(idPoutine);
            res
                .status(200)
                .json(poutine);
        });

}