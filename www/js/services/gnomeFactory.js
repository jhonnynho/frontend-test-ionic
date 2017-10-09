(function (){
    'use strict';

    angular.module('gnomeApp').factory('gnomeFactory', ['$q', '$http', '$ionicLoading', gnomeFactory]);

    function gnomeFactory($q, $http, $ionicLoading){

        var gnomesData = function() {
            var defer = $q.defer();
            var promise = defer.promise;
            $ionicLoading.show({
                content: 'Loading',
                animation: 'fade-in',
                showBackdrop: true,
                maxWidth: 200,
                showDelay: 0
            });
            $http({
                method: "GET",
                url: "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json"
            }).then(function (response) {
                $ionicLoading.hide();
                defer.resolve(response);
            }, function(errorData){
                $ionicLoading.hide();
                defer.reject(errorData);
            });
            return promise;
        };

        var service = {
            gnomesData: gnomesData,
        };

        return service;
    };

})();