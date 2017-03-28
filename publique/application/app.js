angular.module("guidepoutines", ["ngRoute"])
    .config(configurationProjet);

function configurationProjet($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: "application/accueil/accueil.html",
            controller: controlleurAccueil,
            controllerAs: "vm"
        })
        .when('/resto/:urlResto', {
            templateUrl: "application/restos/resto.html",
            controller: controlleurAfficherResto,
            controllerAs: "vm"
        })
        .when('/resto/:urlResto/poutines/:idPoutine', {
            templateUrl: "application/afficher-poutine/poutine.html",
            controller: controlleurAfficherPoutine,
            controllerAs: "vm"
        });
}