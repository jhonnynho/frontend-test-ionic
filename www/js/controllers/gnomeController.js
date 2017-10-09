(function(){
    'use strict';

    angular.module('gnomeApp').controller('gnomeController', ['gnomeFactory', gnomeController]);

    function gnomeController(gnomeFactory){
        var vm = this;

        vm.gnomes = [];
        vm.search = "";

        vm.getGnomeData = function(){
            gnomeFactory.gnomesData().then(
                function(response){
                    vm.gnomes = response.data.Brastlewark;              
                },
                function(error){
                    console.log(error);
                }
            );
        };

        vm.getGnomeData();
    }
})();