angular.module('alurapic').controller('FotosController',function($scope, recursoFoto /*, $http*/){
    recursoFoto.query(function(fotos){
        $scope.fotos = fotos;
    },function(erro){
        console.error('As fotos não foram carregadas.')
    });

    /*ABaixo Código para usar $http*/
  // $http.get(fotosUrl)
  // .success(function(fotos){
  //   $scope.fotos = fotos;
  // })
  // .error(function(erro){
  //   console.error('As fotos não foram carregadas.')
  // });

  $scope.remover = function(foto){

      recursoFoto.delete({fotoId: foto._id},function(){
          var i = $scope.fotos.indexOf(foto);
          $scope.fotos.splice( i,1);
          $scope.mensagem='Sua foto foi Deletada com sucesso';
      },function(error){
          console.log(error);
      });

      /*ABaixo Código para usar $http*/
    //   $http.delete(fotosUrl+ foto._id)
    //   .success(function(){
    //       var i = $scope.fotos.indexOf(foto);
    //       $scope.fotos.splice( i,1);
    //       $scope.mensagem='Sua foto foi Deletada com sucesso';
    //   }).error(function(error){
    //       console.log(error);
    //   });
  }



//   $scope.fotos = [
//     {
//       titulo: 'Leão',
//       url:'http://www.fundosanimais.com/Minis/leoes.jpg'
//     },
//     {
//       titulo: 'Cachorro',
//       url:'http://www.fundosanimais.com/Minis/cachorros.jpg'
//     },
//     {
//       titulo: 'Gato',
//       url:'http://www.fundosanimais.com/Minis/gato.jpg'
//     }
// ];
});
