angular.module('devSocial')
  .controller('homeCtrl', homeCtrl);

  function homeCtrl($scope, $stateParams) {
    $scope.test = "HomeCtrl is working";
    $scope.saveProfileForm = function () {
      
    };
  }
