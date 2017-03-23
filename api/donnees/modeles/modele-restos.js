//Modèle de schéma pour les données que prendra la base de données restos
var mongoose = require("mongoose");

//Modèle pour les documents des Avis
var modeleAvis = new mongoose.Schema({
    //Champs du document
    nom: {
        type: String,
        required: true
    },
    critique: {
        type: String,
        required: true
    },
    note_sauce: {
        type: Number,
        required: true,
        min: 0,
        max: 5,
        "default": 0
    },
    note_frites: {
        type: Number,
        required: true,
        min: 0,
        max: 5,
        "default": 0
    },
    note_fromage: {
        type: Number,
        required: true,
        min: 0,
        max: 5,
        "default": 0
    },
    note_fraicheur: {
        type: Number,
        required: true,
        min: 0,
        max: 5,
        "default": 0
    },
    note_originalité: {
        type: Number,
        required: true,
        min: 0,
        max: 5,
        "default": 0
    },
    note_service: {
        type: Number,
        required: true,
        min: 0,
        max: 5,
        "default": 0
    }
});

//Modèle pour les documents des poutines
var modelePoutines = new mongoose.Schema({
    //Champs du document
    nom: {
        type: String,
        required: true
    },
    ingredients: {
        type: [String],
        required: true
    },
    img: {
        type: String,
        default: "pout-generique.png"
    },
    formats_prix: {
        type: [
            [String, Number]
        ],
        required: true
    },
    commentaires_speciaux: String,
    avis: [modeleAvis]
});

//Modèle pour les restos

var modeleRestos = new mongoose.Schema({
    //Champs du document
    nom: {
        type: String,
        required: true
    },
    reservation: {
        type: Boolean,
        required: true,
        "default": false
    },
    img: {
        type: String,
        "default": "resto-generique.png"
    },
    livraison: {
        type: Boolean,
        required: true,
        "default": false
    },
    description: {
        type: String,
        required: true
    },
    coord: {
        adresse: String,
        ville: String,
        province: String,
        code_postal: String,
        tel: String
    },
    liens: {
        facebook: String,
        site_web: String
    },
    heures_ouv: {
        lundi: String,
        mardi: String,
        mercredi: String,
        jeudi: String,
        vendredi: String,
        samedi: String,
        dimanche: String
    },
    particularites: [String],
    menu: [modelePoutines]
});

//Compiler le schéma

mongoose.model("Resto", modeleRestos);