angular.module('alurapic').controller('cadastroController', function($scope/*, $http*/, $routeParams, recursoFoto){

    if($routeParams.id){
        recursoFoto({fotoId:$routeParams.id}, function(foto){
            $scope.foto=foto;
        })
    }
    $scope.submeter = function(){
        if($routeParams.id){
            recursoFoto.update({fotoId:$routeParams.id},$scope.foto,function(){
                $scope.mensagem='Foto Alterada com Sucesso';
                $scope.foto={};
                window.location.href('/fotos');
            },function(error){
                $scope.mensagem='foto nao pode ser alterada!';
            })
        }else{
            recursoFoto.save($scope.foto,function(){
                $scope.mensagem = 'Foto Cadastrada com Sucesso!';
            },function(erro){
                console.log(erro);
                $scope.mensagem = 'Não foi possível cadastrar a imagem!'
            });

        }
    }
})
