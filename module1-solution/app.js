(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.checkDishes = function () {
    var num = countDishes($scope.dishes);
    $scope.message = buildMessage(num);
    if($scope.message == 'Please enter data first') {
      $scope.msg = 'Please enter data first';
      $scope.message = "";
    }
    else if($scope.message == 'Enjoy!') {
        $scope.msg = "";
        $scope.message = 'Enjoy!';
    }
    else if($scope.message == 'Too much!') {
        $scope.msg = "";
        $scope.message = 'Too much!';
    }
  };

  function countDishes(dishes) {
    var count = 0;
    if (dishes) {
      var array = dishes.split(',');
      for (var idx in array) {
        if (array[idx].trim().length != 0) {
          count++;
        }
      }
    }
    return count;
  }

  function buildMessage(num) {
    if (num === 0) {
      return 'Please enter data first';
    }
    else if (num <= 3) {
      return 'Enjoy!';
    } else {
      return 'Too much!';
    }
  }
}

})();
