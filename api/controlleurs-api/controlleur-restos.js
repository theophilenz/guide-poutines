//CONTROLLEURS POUR LES RESTOS
//Demande de la connexion mongoose
var mongoose = require("mongoose");
mongoose.promise = global.Promise;

//Ajouter référence au resto
var Resto = mongoose.model("Resto");

//Exporter le module pour voir les restos
module.exports.tousRestos = function(req, res) {
    console.log("Controlleur pour voir tous les restos");

    //Trouver les restaurants dans la collection
    Resto
        .find()
        .exec(function(err, restos) {
            if (err) {
                console.log("Erreur à trouver les restaurants");
                res
                    .status(500)
                    .json(err);
            } else {
                console.log("Restos trouvés " + restos.length);
                res
                    .json(restos);
            }
        });
};

module.exports.restoUnique = function(req, res) {
    //Obtenir les infos via les paramètres de recherche
    var urlResto = req.params.urlResto;
    //Obtenir un resto unique par son champ "url"
    Resto
        .where({ 'url': urlResto })
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
                .json(resto);
        });

}