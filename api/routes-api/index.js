//Dépendances
var express = require("express");
//Utiliser le routeur d'express
var router = express.Router();

//Demander les controlleurs
var controlleurRestos = require("../controlleurs-api/controlleur-restos");

//Tous les requetes venant de /API seront traîtées ici. Les infos sont traîtées à partir des controlleurs
router
    .route("/restos")
    .get(controlleurRestos.tousRestos);
router
    .route("/restos/:resto")
    .get(controlleurRestos.restoUnique);

//Exporter le module
module.exports = router;