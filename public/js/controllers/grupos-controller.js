angular.module('alurapic').controller('gruposController', function($scope, $http, gruposUrl){
    $http.get(gruposUrl)
    .success(function(grupos){
        $scope.grupos = grupos;
    })
    .error(function(error){
        console.log(error);
    });
});
