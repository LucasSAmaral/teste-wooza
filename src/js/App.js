angular.module('wooza', ['ngRoute'])
    .config(['$routeProvider', '$locationProvider',
        function($routeProvider, $locationProvider) {
            
            $routeProvider
                .when('/plataforma', {
                    templateUrl: 'template/plataforma.html',
                    controller: 'applicationController'
                })
                .when('/plano', {
                    templateUrl: 'template/planos.html',
                    controller: 'applicationController'
                })
                .when('/dados-pessoais', {
                    templateUrl: 'template/dados-pessoais.html',
                    controller: 'applicationController'
                });

                $routeProvider.otherwise({
                    redirectTo: "/plataforma"
                });
        }
])