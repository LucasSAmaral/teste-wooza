angular.module('wooza')
    .factory('Scopes', function($rootScope){
        var mem = {};

        return {
            store: function(key, value) {
                $rootScope.$emit('scope.stored', key);
                mem[key] = value;
            },
            get: function(key) {
                return mem[key];
            }
        }
    })
    .controller('plataformaController', function($scope, $http, Scopes) {
        
        $http.get("http://private-59658d-celulardireto2017.apiary-mock.com/plataformas")
        .then(function (response){
            $scope.platforms = response.data.plataformas;
        })

        Scopes.store('plataformaController', $scope);

        $scope.getNamePlatform = function(nome) {
            $scope.nomePlataforma = nome;
            return $scope.nomePlataforma;
        }

        $scope.getSkuPlatform = function(sku) {
            $scope.skuPlataforma = sku;
            return $scope.skuPlataforma;
        }

    })
    .controller('planosController', function($scope, $http, Scopes) {

        $scope.sku = Scopes.get('plataformaController').skuPlataforma;

        $scope.carregaPlanos = function () {
            var url = "http://private-59658d-celulardireto2017.apiary-mock.com/planos/" + $scope.sku;
            $http.get(url)
                .then(function(response){
                    $scope.plans = response.data.planos;
                });
        }

        Scopes.store('planosController', $scope);

        $scope.getPlanName = function(nome) {
            $scope.nomePlano = nome;
            return $scope.nomePlano;
        }


        $scope.$on('$viewContentLoaded', function() {
            $scope.carregaPlanos();
        })
    })
    .controller('dadosPessoaisController', function($scope, Scopes){
        $scope.loadMask = function() {
            $(document).ready(function(){
                $('#nascimento').mask('99/99/9999');
                $('#cpf').mask('999.999.999-99');
                $('#telefone').mask('(99) 99999-9999');
            });
        }

        Scopes.store('dadosPessoaisController', $scope);

        $scope.getDados = function() {
            console.log("Você escolheu a plataforma: " + Scopes.get('plataformaController').nomePlataforma);
            console.log("Você escolheu o plano: " + Scopes.get('planosController').nomePlano);
        }

        $scope.$on('$viewContentLoaded', function() {
            $scope.loadMask();
        })
    })