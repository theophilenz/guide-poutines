//Dépendances
var express = require("express");
//Utiliser le routeur d'express
var router = express.Router();

//Demander les controlleurs
var controlleurRestos = require("../controlleurs-api/controlleur-restos");
var controlleurPoutines = require("../controlleurs-api/controlleur-menu-poutines");
var controlleurAvis = require("../controlleurs-api/controlleur-avis");

//Tous les requetes venant de /API seront traîtées ici. Les infos sont traîtées à partir des controlleurs
router
    .route("/restaurants")
    .get(controlleurRestos.tousRestos);
router
    .route("/restaurants/:urlResto")
    .get(controlleurRestos.restoUnique);
router
    .route("/restaurants/:urlResto/poutines")
    .get(controlleurPoutines.tousPoutines);
router
    .route("/restaurants/:urlResto/poutines/:idPoutine")
    .get(controlleurPoutines.unePoutine);
router
    .route("/restaurants/:idResto/poutines/:idPoutine/avis")
    .get(controlleurAvis.tousLesAvis);
//Exporter le module
module.exports = router;