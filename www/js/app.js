angular.module('gnomeApp', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
      url: '/app/gnomes',
      templateUrl: '/js/template/gnomes.html'
    })
    .state('detail', {
      url: '/app/gnomes/detail/:id',
      templateUrl: '/js/template/detail.html'
    })
  $urlRouterProvider.otherwise('/app/gnomes');
});
