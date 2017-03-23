angular.module("guidepoutines", ["ngRoute"])
    .config(configurationProjet);

function configurationProjet($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: "application/accueil/accueil.html",
            controller: controlleurAccueil,
            controllerAs: "vm"
        })
        .when('/restos/:id', {
            templateUrl: "application/restos/resto.html",
            controller: controlleurAfficherResto,
            controllerAs: "vm"
        });
}