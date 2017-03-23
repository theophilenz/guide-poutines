angular.module("guidepoutines").factory("FactoryDonnees", FactoryDonnees);

function FactoryDonnees($http) {
    return {
        listeRestos: listeRestos,
    };

    function listeRestos() {
        return $http.get("/api/restaurants").then(complete).catch(failed);
    }

    function complete(response) {
        return response;
    }

    function failed(error) {
        console.log(error.statusText);
    }
};