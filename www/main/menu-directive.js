menuDirective = function($ionicScrollDelegate, $window) {
  return{
    template : `
      <div ng-class="menuClass" ng-style="menuStyle">
        <table>
          <tr>
            <td>
              <div class="ion-arrow-down-b" ng-class="menuNav == 'home' ? 'main-menu-nav':'main-menu-default'"></div>
              HOME
            </td>
            <td>
              <div class="ion-arrow-down-b" ng-class="menuNav == 'about' ? 'main-menu-nav':'main-menu-default'"></div>
              ABOUT
            </td>
            <td>
              <div class="ion-arrow-down-b" ng-class="menuNav == 'resume' ? 'main-menu-nav':'main-menu-default'"></div>
              RESUME
            </td>
            <td>
              <div class="ion-arrow-down-b" ng-class="menuNav == 'skills' ? 'main-menu-nav':'main-menu-default'"></div>
              SKILLS
            </td>
            <td>
              <div class="ion-arrow-down-b" ng-class="menuNav == 'portfolio' ? 'main-menu-nav':'main-menu-default'"></div>
              PORTFOLIO
            </td>
            <td>
              <div class="ion-arrow-down-b" ng-class="menuNav == 'contacts' ? 'main-menu-nav':'main-menu-default'"></div>
              CONTACTS
            </td>
          </tr>
        </table>
      </div>
    `,
    link : function(scope, element, attrs) {
      var htmlHalfHeight;
      var mainSlide = angular.element(document.querySelector('#main-slide'));
      var mainSlideObj = {
        standard : (mainSlide.prop('offsetTop') + mainSlide.prop('clientHeight')/3),
        bottom : mainSlide.prop('offsetTop') + mainSlide.prop('clientHeight')
      }
      var mainBelief = angular.element(document.querySelector('#main-belief'));
      var mainBeliefObj = {
        standard : (mainBelief.prop('offsetTop') + mainBelief.prop('clientHeight')/3),
        bottom : mainBelief.prop('offsetTop') + mainBelief.prop('clientHeight')
      }
      var mainIntroduction = angular.element(document.querySelector('#main-introduction'));
      var mainIntroductionObj = {
        standard : (mainIntroduction.prop('offsetTop') + mainIntroduction.prop('clientHeight')/3),
        bottom : mainIntroduction.prop('offsetTop') + mainIntroduction.prop('clientHeight')
      }
      var mainResume = angular.element(document.querySelector('#main-resume'));
      var mainResumeObj = {
        standard : (mainResume.prop('offsetTop') + mainResume.prop('clientHeight')/3),
        bottom : mainResume.prop('offsetTop') + mainResume.prop('clientHeight')
      }
      var mainSkill = angular.element(document.querySelector('#main-skill'));
      var mainSkillObj = {
        standard : (mainSkill.prop('offsetTop') + mainSkill.prop('clientHeight')/3),
        bottom : mainSkill.prop('offsetTop') + mainSkill.prop('clientHeight')
      }
      var mainPortfolio = angular.element(document.querySelector('#main-portfolio'));
      var mainPortfolioObj = {
        standard : (mainPortfolio.prop('offsetTop') + mainPortfolio.prop('clientHeight')/3),
        bottom : mainPortfolio.prop('offsetTop') + mainPortfolio.prop('clientHeight')
      }
      var mainContacts = angular.element(document.querySelector('#main-contacts'));
      var mainContactsObj = {
        standard : (mainContacts.prop('offsetTop') + mainContacts.prop('clientHeight')/3),
        bottom : mainContacts.prop('offsetTop') + mainContacts.prop('clientHeight')
      }

      scope.menuClass = 'main-menu';
      scope.menuStyle = '';
      scope.menuNav = 'home';

      scope.scrollEvent = function() {
        htmlHalfHeight = $ionicScrollDelegate.getScrollPosition().top + document.body.clientHeight/2;

        if($ionicScrollDelegate.getScrollPosition().top <= element.prop('offsetTop')) {
          scope.menuClass = 'main-menu';
          scope.menuStyle = '';
        }else if($ionicScrollDelegate.getScrollPosition().top > element.prop('offsetTop')) {
          scope.menuClass = 'main-menu-fixed';
          scope.menuStyle = { top : $ionicScrollDelegate.getScrollPosition().top+'px' };
        }

        if(htmlHalfHeight >= mainSlideObj.standard && htmlHalfHeight <= mainSlideObj.bottom) {
          scope.menuNav = 'home';
        }
        if(htmlHalfHeight >= mainBeliefObj.standard && htmlHalfHeight <= mainBeliefObj.bottom) {
          scope.menuNav = 'about';
        }
        if(htmlHalfHeight >= mainIntroductionObj.standard && htmlHalfHeight <= mainIntroductionObj.bottom) {
          scope.menuNav = 'about';
        }
        if(htmlHalfHeight >= mainResumeObj.standard && htmlHalfHeight <= mainResumeObj.bottom) {
          scope.menuNav = 'resume';
        }
        if(htmlHalfHeight >= mainSkillObj.standard && htmlHalfHeight <= mainSkillObj.bottom) {
          scope.menuNav = 'skills';
        }
        if(htmlHalfHeight >= mainPortfolioObj.standard && htmlHalfHeight <= mainPortfolioObj.bottom) {
          scope.menuNav = 'portfolio';
        }
        if(htmlHalfHeight >= mainContactsObj.standard && htmlHalfHeight <= mainContactsObj.bottom) {
          scope.menuNav = 'contacts';
        }

        scope.$apply();

      }
    }
  }
}

app.directive('menuDirective', menuDirective);
