angular.module('wooza')
    .controller('plataformaController', function($scope, $http) {
        
        $http.get("http://private-59658d-celulardireto2017.apiary-mock.com/plataformas")
        .then(function (response){
            $scope.platforms = response.data.plataformas;
        })

    })
    .controller('planosController', function($scope, $http, $routeParams) {
        $scope.carregaPlanos = function () {
            var url = "http://private-59658d-celulardireto2017.apiary-mock.com/planos/" + $routeParams.planoSKU;
            $http.get(url)
                .then(function(response){
                    $scope.plans = response.data.planos;
                    console.log($scope.plans);
                });
        }

        $scope.$on('$viewContentLoaded', function() {
            $scope.carregaPlanos();
        })
    })