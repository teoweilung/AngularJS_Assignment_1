(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController ($scope) {

    $scope.CheckIfTooMuch = function () {
      var result;
      var lunchlist =  $scope.lunchlist;

      if (!lunchlist){
        result = "Please enter data first";

        // make font color red
        // make border color red
        $scope.colorstyle = "red";
      }
      else {
        var lunchlist_arr = lunchlist.split(",");

        // check for empty input, just deduct 1 from total if there is an empty input
        var totalItems = lunchlist_arr.length;
        for (var i = 0; i < lunchlist_arr.length; i++) {
          if (!lunchlist_arr[i])
            totalItems--;
        }

        if (totalItems <= 3)
          result = "Enjoy!";
        else if (totalItems > 3)
          result = 'Too much!';

          // make font color green
          // make border green
          $scope.colorstyle = "green";
      }

      $scope.checkIfTooMuchResult = result;
    };

  }

})();
