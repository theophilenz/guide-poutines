angular.module("guidepoutines").controller("controlleurAfficherPoutine", controlleurAfficherResto);

function controlleurAfficherPoutine($route, $routeParams, FactoryDonnees, $rootScope) {
    var vm = this;
    var urlResto = $routeParams.urlResto;
    var idPoutine = $routeParams.idPoutine;
    FactoryDonnees.afficherPoutine(urlResto, idPoutine).then(function(response) {
        vm.poutine = response.data;
        vm.titre = vm.poutine.nom;
        $rootScope.header = "-" + "Poutine " + vm.titre;
    });
}