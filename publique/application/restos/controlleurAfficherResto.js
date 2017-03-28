angular.module("guidepoutines").controller("controlleurAfficherResto", controlleurAfficherResto);

function controlleurAfficherResto($route, $routeParams, FactoryDonnees, $rootScope) {
    var vm = this;
    var urlResto = $routeParams.urlResto;
    console.log(urlResto);
    FactoryDonnees.unResto(urlResto).then(function(response) {
        //Obtenir le resto, qui se trouve à l'index zéro (somehow)
        vm.resto = response.data[0];
        vm.titre = vm.resto.nom;
        vm.url = vm.resto.url;
        $rootScope.header = "-" + vm.titre;
    });
}