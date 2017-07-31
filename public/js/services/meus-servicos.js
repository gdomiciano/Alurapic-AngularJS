angular.module('meusServicos', ['ngResource'])
    .factory('recursoFoto', function($resource){
        return $resource('/v1/fotos/:fotoId', null,{'update':{method:'PUT'}})//
    })
    .factory('cadastrarFotos', function(recursoFoto, $q){ //usa o $q que é o promisse do mundo angular e dessa forma nao precisariamos uasr o $apply()
        var service = {};
        service.cadastrar = function(foto){
            return $q(function(resolve,reject){
                if (foto.id){
                    recursoFoto.update({fotoId:foto._id}, foto, function(){
                        resolve({
                            mensagem:'Foto' + foto.titulo + ' atualizada com sucesso!',
                            inclusao: false
                        }),
                        function(erro){
                            console.log(erro)
                            reject({
                                mensagem:'Não foi possivel atualizar a foto' + foto.titulo
                            });
                        }
                    });
                    
                }else{
                    recursoFoto.save({fotoId:foto._id}, foto, function(){
                        resolve({
                            mensagem:'Foto' + foto.titulo + ' incluida com sucesso!',
                            inclusao: true
                        }),function(erro){
                            console.log(erro)
                            reject({
                                mensagem:'Não foi possivel incluir a foto' + foto.titulo
                            })
                        }
                    });
                }
            });
        };
        return service
    });
