menuDirective = function($ionicScrollDelegate, $window) {
  return{
    template : `
      <div ng-class="menuClass" ng-style="menuStyle">
        <table>
          <tr>
            <td>HOME</td><td>ABOUT</td><td>RESUME</td><td>SKILLS</td><td>PORTFOLIO</td><td>CONTACTS</td>
          </tr>
        </table>
      </div>
    `,
    link : function(scope, element, attrs) {
      var status = 0;
      var aa = element.prop('offsetTop');
      scope.menuClass = 'main-menu';
      scope.menuStyle = '';

      scope.scrollEvent = function() {

        if($ionicScrollDelegate.getScrollPosition().top <= element.prop('offsetTop')) {
          scope.menuClass = 'main-menu';
          scope.menuStyle = '';
        }else if($ionicScrollDelegate.getScrollPosition().top > element.prop('offsetTop')) {
          scope.menuClass = 'main-menu-fixed';
          scope.menuStyle = { top : $ionicScrollDelegate.getScrollPosition().top+'px' };
        }

        scope.$apply();
      }
    }
  }
}

app.directive('menuDirective', menuDirective);
