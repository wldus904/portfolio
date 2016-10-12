specProficiency = function() {
  return{
    template : `
      <svg class="spec-svg">
        <path class="spec-svg-path-bg high" fill="none" stroke="#000"
          d="
          M 75 , 20
          a 50 50, 0, 0 1, 0, 0
          a 50 50, 0, 1 1, -5, 0"
        />
        <path class="spec-svg-path-bg middle" fill="none" stroke="#000"
          d="
          M 75 , 20
          a 50 50, 0, 0 1, 0, 0
          a 50 50, 0, 1 1, -5, 0"
        />
        <path class="spec-svg-path-bg low" fill="none" stroke="#000"
          d="
          M 75 , 20
          a 50 50, 0, 0 1, 0, 0
          a 50 50, 0, 1 1, -5, 0"
        />
        <text x="55" y="80" class="spec-svg-value" ng-class="valueClass">{{value + "%"}}</text>
        <path class="spec-svg-path" id="{{valueId}}"
          d="
          M 75 , 20
          a 50 50, 0, 0 1, 0, 0
          a 50 50, 0, 1 1, -5, 0"
        />
      </svg>
    `,
    scope: {
      value : '=',
      valueId : '='
    },
    controller : function($scope) {
      var element;
      var gaugeValue = 320 - ($scope.value*320/100);
      $scope.valueClass;

      setTimeout(function() {
        element = document.getElementById($scope.valueId);
        element.style.strokeDashoffset = gaugeValue;
        if($scope.value <= 33) {
          element.style.stroke = '#EBB035';
          $scope.valueClass = 'spec-fill-low';
        }else if($scope.value <= 66) {
          element.style.stroke = '#21B6A8';
          $scope.valueClass = 'spec-fill-middle';
        }else{
          element.style.stroke = '#0099CC';
          $scope.valueClass = 'spec-fill-high';
        }

      }, 200);
    }
  }
}

app.directive('specProficiency', specProficiency);
