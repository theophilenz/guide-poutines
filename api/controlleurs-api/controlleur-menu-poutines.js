//CONTROLLEUR POUR LES POUTINES
var mongoose = require("mongoose");
var Resto = mongoose.model("Resto");

//Obtenir un resto unique par son champ "id"
module.exports.tousPoutines = function(req, res) {
    //Obtenir les infos via les paramètres de recherche
    var urlResto = req.params.urlResto;
    Resto
        .findOne({ 'url': urlResto })
        .exec(function(err, resto) {
            console.log("Le restaurant demandé est: " + urlResto);
            if (err) {
                console.log("Erreur à trouver le resto");
                res
                    .status(500)
                    .json(err);
            } else if (!resto) {
                console.log("Aucun resto de la valeur de: " + urlResto + " Trouvé");
                res
                    .status(404)
                    .json(err);
            }
            res
                .status(200)
                .json(resto.menu_poutines);
        });
};

//Obtenir une poutine unique par son ID
module.exports.unePoutine = function(req, res) {
    var urlResto = req.params.urlResto;
    var idPoutine = req.params.idPoutine;
    Resto
        .findOne({ 'url': urlResto })
        .exec(function(err, resto) {
            console.log("Le restaurant demandé est: " + urlResto);
            if (err) {
                console.log("Erreur à trouver le resto");
                res
                    .status(500)
                    .json(err);
            } else if (!resto) {
                console.log("Aucun resto de la valeur de: " + urlResto + " Trouvé");
                res
                    .status(404)
                    .json(err);
            }
            var menu = resto.menu_poutines;
            var poutine;
            for (var i = 0; i < menu.length; i++) {
                console.log(menu[i]._id);
                if (menu[i]._id == idPoutine) {
                    poutine = menu[i];
                }
            }
            res
                .status(200)
                .json(poutine);
        });

}