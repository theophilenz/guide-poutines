//Initialiser tous les modules nécessaires
var express = require("express");
//Le module path pour acceder aux fichiers
var path = require("path");
//Utiliser les routes pour l'API
var routesAPI = require("./api/routes-api/");

//CONFIGURATION DU SERVEUR

//Créer nouvelle instance d'express
var application = express();

//Définir les ports
application.set("port", 3000); //Le port est défini à 3000. Variables Express

//Express va communiquer avec le port 3000, aussi, on l'assigne à la variable serveur
var serveur = application.listen(application.get("port"), function() {
    var port = serveur.address().port;
    console.log("Le serveur démarre sur le port " + port); //Asynchronious. Ceci confirme que le serveur roule bel et bien.
});


///CRÉATION DU SYSTÈME DE ROUTAGE
//Création d'un middleware
//middleware: permet d'intéragir avec les requêtes avant que la réponse ne soit donnée
//Ici ca permettra de connaître les ressources demandées à partir de la console avant d'avancer vers les autres requêtes
//Toujours placer avant express.static

application.use(function(req, res, next) {
    console.log(req.method, req.url);
    next(); //Permet d'avancer à l'étape suivante
});
//pour servir des fichiers statiques à partir de ce répértoire seulement
application.use(express.static(path.join(__dirname, "publique")));

//Routage de la page d'accueil
application.get("/", function(req, res) {
    console.log("Page d'accueil");
    res
        .status(200)
        //Express va servir la page d'accueil a partir de "__dirname=repertoire en cours" /public /index.html
        .sendFile(path.join(__dirname, "publique", "index.html"));
});

//Routage de l'API
//Routage de l'API avec .use. Il utilisera le module dans le fichier routes.js dans routes-api.
application.use("/api", routesAPI);