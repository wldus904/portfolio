mainCtrl = function($scope, $state, $timeout) {
  $scope.introductionStyle = {opacity: '0', position: 'relative', right: '-10em'};

  $scope.slideChanged = function(index) {
    // console.log("change : ", index);
  }

  $scope.changeStyle = function(menu) {
    switch(menu) {
      case 'home': break;
      case 'about': $scope.introductionStyle = {opacity: '1', position: 'relative', right: '0', transition: 'all 1s'}; break;
      case 'resume': break;
      case 'skills': break;
      case 'portfolio': break;
      case 'contacts': break;
    }
  }
}

app.controller('mainCtrl', mainCtrl)
.controller('MyCtrl', function($scope, $document){
    $scope.toTheTop = function() {
      $document.scrollTopAnimated(0, 5000).then(function() {
        console && console.log('You just scrolled to the top!');
      });
    }
    var section3 = angular.element(document.getElementById('section-3'));
    $scope.toSection3 = function() {
      $document.scrollToElementAnimated(section3);
    }
  }
).value('duScrollOffset', 30);
