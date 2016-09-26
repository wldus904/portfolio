mainCtrl = function($scope, $state) {
  $scope.goPage = function(page) {
    $state.go(page);
  }
}

app.controller('mainCtrl', mainCtrl);
