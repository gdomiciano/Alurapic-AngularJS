angular.module('minhasDiretivas',[]).directive('panel', function(){
    var ddo = {};

    ddo.templateUrl = '../../templates/panel.html';
    ddo.restrict = 'E';
    ddo.transclude = true;
    ddo.scope = {
        titulo:'@titulo'
    };

    return ddo;
}).directive('minhaFoto', function(){
    var ddo = {};

    ddo.templateUrl = '../../templates/foto.html';
    // ddo.template = '<img src="{{foto.titulo}}">';  //para usar dessa forma precisarei comentar o scope tbm
    ddo.restrict = 'AE';
    ddo.scope = {
        titulo:'@titulo',
        url:'@url'
    };

    return ddo;
}).directive('filtro', function(){
    var ddo = {};

    ddo.link = function(scope, input){
        input.on('input', function(){
            scope.busca = this.value;
            scope.$apply();
        })
    }
    // return ddo;
});
