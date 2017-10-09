(function(){
    'use strict';

    angular.module('gnomeApp').controller('gnomeDetailController', ['gnomeFactory','$stateParams', '$ionicViewSwitcher', '$ionicHistory', gnomeDetailController]);

    function gnomeDetailController(gnomeFactory, $stateParams, $ionicViewSwitcher, $ionicHistory){
        var vm = this;

        vm.gnome = [];
        vm.gnomeName = "";

        vm.gnomeId = Number($stateParams.id);

        vm.getGnomeDetail = function(){
            gnomeFactory.gnomesData().then(
                function(response){
                    vm.gnome = _.chain(response.data.Brastlewark)
                                .flatten()
                                .find({"id": vm.gnomeId})
                                .value();

                    vm.gnomeName = vm.gnome.name;
                    vm.friends = vm.gnome.friends;
                    vm.professions = vm.gnome.professions;
                },
                function(error){
                    console.log(error);
                }
            );
        };

        vm.goBack = function(){
            $ionicViewSwitcher.nextDirection('back');
            $ionicHistory.goBack(); 
        };

        vm.getGnomeDetail();
    }
})();