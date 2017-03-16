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
    var resto = req.params.resto;
    console.log("On affiche le resto: " + resto);
    res
        .status(200)
        .json(restos[resto]);
}