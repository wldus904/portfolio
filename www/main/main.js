mainCtrl = function($scope, $state, $timeout) {
  $scope.btnStyle="no-active-main-btn";
  $scope.currentPage = {
    page: "",
    url: ""
  };

  $scope.goPage = function(page) {
    if(page == $scope.currentPage.page) {
      $scope.btnStyle = "no-active-main-btn";
      $scope.currentPage.page = "";
      $scope.currentPage.url = "";
      $scope.ctrl = "";
    }else{
      $scope.btnStyle = "active-main-btn";
      $scope.currentPage.page = page;
      $scope.currentPage.url = page+"/"+page+".html";
    }
  }
}

app.controller('mainCtrl', mainCtrl);
