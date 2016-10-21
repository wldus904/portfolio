introductionDirective = function() {
  return {
    templateUrl : 'templates/introduction/introduction.html',
    controller: function($scope) {
    }
  }
}

app.directive('introductionDirective', introductionDirective);
