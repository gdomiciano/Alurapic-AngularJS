angular.module('alurapic',['minhasDiretivas', 'ngAnimate', 'ngRoute', 'meusServicos'])
    .config(function($routeProvider, $locationProvider){//config carrega uma funçao
        $locationProvider.html5Mode(true);
        $routeProvider
            .when('/',{templateUrl:'../partials/lista-fotos.html', controller:'FotosController'})
            .when('/fotos',{templateUrl:'../partials/lista-fotos.html', controller:'FotosController'})
            .otherwise({templateUrl:'../partials/404.html'})
            .when('/cadastrar',{templateUrl:'../partials/cadastro.html', controller:'cadastroController'})
            .when('/editar/:id',{templateUrl:'../partials/cadastro.html', controller:'cadastroController'});
    })
    .factory('gruposUrl', function(){ // factory para definir uma url global dentro do projeto e podendo ser acessada bem como o $scope , porém se, o $
        return '/v1/grupos/';
    });
