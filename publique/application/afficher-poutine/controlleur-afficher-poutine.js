angular.module("guidepoutines").controller("controlleurAfficherPoutine", controlleurAfficherResto);

function controlleurAfficherPoutine($route, $routeParams, FactoryDonnees, $rootScope) {
    var vm = this;
    var urlResto = $routeParams.urlResto;
    var idPoutine = $routeParams.idPoutine;
    FactoryDonnees.afficherPoutine(urlResto, idPoutine).then(function(response) {
        vm.poutine = response.data;
        vm.titre = vm.poutine.nom;
        $rootScope.header = "-" + "Poutine " + vm.titre;
        vm.critiques = response.data.avis;
        //Toutes les variables des notes
        vm.note_originalite = 0;
        vm.note_service = 0;
        vm.note_fraicheur = 0;
        vm.note_fromage = 0;
        vm.note_frites = 0;
        vm.note_sauce = 0;
        //Boucle qui navigue dans tous les avis et retourne les notes
        for (var i = 0; i < vm.critiques.length; i++) {
            vm.note_originalite += vm.critiques[i].note_originalite;
            vm.note_service += vm.critiques[i].note_service;
            vm.note_fraicheur += vm.critiques[i].note_fraicheur;
            vm.note_fromage += vm.critiques[i].note_fromage;
            vm.note_frites += vm.critiques[i].note_frites;
            vm.note_sauce += vm.critiques[i].note_sauce;
        }
        var calculerMoyenneGeneral = function(note) {
            return note / vm.critiques.length;
        }
        vm.moyenne_originalite = calculerMoyenneGeneral(vm.note_originalite);
        vm.moyenne_service = calculerMoyenneGeneral(vm.note_service);
        vm.moyenne_fraicheur = calculerMoyenneGeneral(vm.note_fraicheur);
        vm.moyenne_fromage = calculerMoyenneGeneral(vm.note_fromage);
        vm.moyenne_frites = calculerMoyenneGeneral(vm.note_frites);
        vm.moyenne_sauce = calculerMoyenneGeneral(vm.note_sauce);

        //Calculer moyenne complete de la poutine! yeah!
        var totalMoyenne = vm.moyenne_originalite + vm.moyenne_service + vm.moyenne_fraicheur + vm.moyenne_fromage + vm.moyenne_frites + vm.moyenne_sauce;
        vm.calculerMoyenneCompletePoutine = function() {
            var moyenne = totalMoyenne / 6;
            return moyenne.toFixed(2);
        }
    });
    FactoryDonnees.unResto(urlResto).then(function(response) {
        //Obtenir le resto, qui se trouve à l'index zéro (somehow)
        vm.resto = response.data[0];
        vm.restoNom = vm.resto.nom;
        vm.restoUrl = vm.resto.url;
    });
};