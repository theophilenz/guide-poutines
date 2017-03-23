angular.module("guidepoutines").controller("controlleurAccueil", controlleurAccueil);

function controlleurAccueil(FactoryDonnees) {
    var vm = this;
    vm.titre = "Le premier guide complet sur la poutine.";
    //Obtenir l'information à partir du factory
    FactoryDonnees.listeRestos().then(function(response) {
        // console.log(response);
        vm.restos = response.data;
    });
}