///FICHIER DE CONNEXION À LA BASE DE DONNÉES en utilisant mongoose.
var mongoose = require("mongoose");
//Lien de connexion à la base de donées
var urlbd = "mongodb://localhost:27017/guidepoutines";

//Se connecter à mongoose
mongoose.connect(urlbd);

//Suivre et écouter les différents messages de mongoose
//succès
mongoose.connection.on("connected", function() {
    console.log("Mongoose connected to " + urlbd);
});
//Déconnexion
mongoose.connection.on("disconnected", function() {
    console.log("Mongoose disconnected");
});
//Message d'erreur particulière
mongoose.connection.on("error", function(err) {
    console.log("Mongoose connection error: " + err);
});

//Importer le modèle de données 
require("./modeles/modele-restos");