angular.module("guidepoutines").factory("FactoryDonnees", FactoryDonnees);

function FactoryDonnees($http) {
    return {
        listeRestos: listeRestos,
        unResto: unResto,
        afficherPoutine: afficherPoutine
    };

    function listeRestos() {
        return $http.get("/api/restaurants").then(complete).catch(failed);
    }

    function unResto(urlResto) {
        return $http.get("/api/restaurants/" + urlResto).then(complete).catch(failed);
    }

    function afficherPoutine(urlResto, idPoutine) {
        return $http.get("/api/restaurants/" + urlResto + "/poutines/" + idPoutine).then(complete).catch(failed);
    }

    function complete(response) {
        return response;
    }

    function failed(error) {
        console.log(error.statusText);
    }
};