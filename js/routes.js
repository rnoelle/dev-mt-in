angular.module('devSocial')
  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: './js/views/home/homeTmpl.html',
        controller: 'homeCtrl'
      })
      .state('landing', {
        url: '/landing',
        templateUrl: './js/views/landing/landingTmpl.html',
        controller: 'landingCtrl'
      })
      .state('view', {
        url: '/view',
        templateUrl: './js/views/friends/viewTmpl.html',
        controller: 'friendCtrl'
      })
      .state('find', {
        url: '/find',
        parent: 'friends',
        templateUrl: './js/views/friends/findTmpl.html',
        controller: 'friendCtrl'
      })
      .state('update', {
        url: '/update',
        parent: 'friends',
        templateUrl: './js/views/update/updateTmpl.html',
        controller: 'updateCtrl'
      });

      $urlRouterProvider.otherwise('/');
  });
