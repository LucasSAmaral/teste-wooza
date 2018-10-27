angular.module('wooza', ['ngRoute'])
    .config(['$routeProvider',
        function($routeProvider) {
            
            $routeProvider
                .when('/plataforma', {
                    templateUrl: 'template/plataforma.html',
                    controller: 'plataformaController'
                })
                .when('/planos', {
                    templateUrl: 'template/planos.html',
                    controller: 'planosController'
                })
                .when('/dados-pessoais', {
                    templateUrl: 'template/dados-pessoais.html',
                    controller: 'dadosPessoaisController'
                });

                $routeProvider.otherwise({
                    redirectTo: "/plataforma"
                });
        }
])