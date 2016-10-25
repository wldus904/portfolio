menuDirective = function($ionicScrollDelegate, $window) {
  return{
    template : `
      <div class="main-menu" ng-class="menuClass" ng-style="menuStyle">
        <table>
          <tr>
            <td ng-click="clickMenu(mainSlideObj)">
              <div class="ion-arrow-down-b" ng-class="menuNav == 'home' ? 'main-menu-nav':'main-menu-default'"></div>
              HOME
            </td>
            <td ng-click="clickMenu(mainBeliefObj)">
              <div class="ion-arrow-down-b" ng-class="menuNav == 'about' ? 'main-menu-nav':'main-menu-default'"></div>
              ABOUT
            </td>
            <td ng-click="clickMenu(mainResumeObj)">
              <div class="ion-arrow-down-b" ng-class="menuNav == 'resume' ? 'main-menu-nav':'main-menu-default'"></div>
              RESUME
            </td>
            <td ng-click="clickMenu(mainSkillObj)">
              <div class="ion-arrow-down-b" ng-class="menuNav == 'skills' ? 'main-menu-nav':'main-menu-default'"></div>
              SKILLS
            </td>
            <td ng-click="clickMenu(mainPortfolioObj)">
              <div class="ion-arrow-down-b" ng-class="menuNav == 'portfolio' ? 'main-menu-nav':'main-menu-default'"></div>
              PORTFOLIO
            </td>
            <td ng-click="clickMenu(mainContactsObj)">
              <div class="ion-arrow-down-b" ng-class="menuNav == 'contacts' ? 'main-menu-nav':'main-menu-default'"></div>
              CONTACTS
            </td>
          </tr>
        </table>
      </div>
    `,
    link : function(scope, element, attrs) {
      $ionicScrollDelegate.getScrollView().options.animationDuration = 1500;

      var htmlHalfHeight;
      var mainSlide = angular.element(document.querySelector('#main-slide'));
      scope.mainSlideObj = {
        standard : (mainSlide.prop('offsetTop') + mainSlide.prop('clientHeight')/3),
        bottom : mainSlide.prop('offsetTop') + mainSlide.prop('clientHeight'),
        top : mainSlide.prop('offsetTop')
      }
      var mainBelief = angular.element(document.querySelector('#main-belief'));
      scope.mainBeliefObj = {
        standard : (mainBelief.prop('offsetTop') + mainBelief.prop('clientHeight')/3),
        bottom : mainBelief.prop('offsetTop') + mainBelief.prop('clientHeight'),
        top : mainBelief.prop('offsetTop')
      }
      var mainIntroduction = angular.element(document.querySelector('#main-introduction'));
      scope.mainIntroductionObj = {
        standard : (mainIntroduction.prop('offsetTop') + mainIntroduction.prop('clientHeight')/3),
        bottom : mainIntroduction.prop('offsetTop') + mainIntroduction.prop('clientHeight'),
        top : mainIntroduction.prop('offsetTop')
      }
      var mainResume = angular.element(document.querySelector('#main-resume'));
      scope.mainResumeObj = {
        standard : (mainResume.prop('offsetTop') + mainResume.prop('clientHeight')/3),
        bottom : mainResume.prop('offsetTop') + mainResume.prop('clientHeight'),
        top : mainResume.prop('offsetTop')
      }
      var mainSkill = angular.element(document.querySelector('#main-skill'));
      scope.mainSkillObj = {
        standard : (mainSkill.prop('offsetTop') + mainSkill.prop('clientHeight')/3),
        bottom : mainSkill.prop('offsetTop') + mainSkill.prop('clientHeight'),
        top : (mainSkill.prop('offsetTop') - mainSkill.prop('clientHeight')/3)
      }
      var mainPortfolio = angular.element(document.querySelector('#main-portfolio'));
      scope.mainPortfolioObj = {
        standard : (mainPortfolio.prop('offsetTop') + mainPortfolio.prop('clientHeight')/3),
        bottom : mainPortfolio.prop('offsetTop') + mainPortfolio.prop('clientHeight'),
        top : mainPortfolio.prop('offsetTop')
      }
      var mainContacts = angular.element(document.querySelector('#main-contacts'));
      scope.mainContactsObj = {
        standard : (mainContacts.prop('offsetTop') - mainContacts.prop('clientHeight')/5),
        bottom : mainContacts.prop('offsetTop') + mainContacts.prop('clientHeight'),
        top : (mainContacts.prop('offsetTop') - mainContacts.prop('clientHeight')/5)
      }

      scope.menuClass = 'main-menu-none-fixed';
      scope.menuStyle = '';
      scope.menuNav = 'home';

      scope.scrollEvent = function() {
        htmlHalfHeight = $ionicScrollDelegate.getScrollPosition().top + document.body.offsetHeight/2;

        if($ionicScrollDelegate.getScrollPosition().top <= element.prop('offsetTop')) {
          if(scope.menuClass != 'main-menu-none-fixed'){
            scope.menuClass = 'main-menu-none-fixed';
            scope.menuStyle = '';
          }
        }else if($ionicScrollDelegate.getScrollPosition().top > element.prop('offsetTop')) {
          if(scope.menuClass != 'main-menu-fixed'){
            scope.menuClass = 'main-menu-fixed';
          }
          scope.menuStyle = { top : $ionicScrollDelegate.getScrollPosition().top+'px' };
        }

        if(htmlHalfHeight >= scope.mainSlideObj.standard && htmlHalfHeight <= scope.mainSlideObj.bottom) {
          if(scope.menuNav != 'home') {
            scope.menuNav = 'home';
            scope.changeStyle('home');
          }
        }
        if(htmlHalfHeight >= scope.mainBeliefObj.standard && htmlHalfHeight <= scope.mainBeliefObj.bottom) {
          if(scope.menuNav != 'about') {
            scope.menuNav = 'about';
            scope.changeStyle('about');
          }
        }
        if(htmlHalfHeight >= scope.mainIntroductionObj.standard && htmlHalfHeight <= scope.mainIntroductionObj.bottom) {
          if(scope.menuNav != 'about') {
            scope.menuNav = 'about';
            scope.changeStyle('about');
          }
        }
        if(htmlHalfHeight >= scope.mainResumeObj.standard && htmlHalfHeight <= scope.mainResumeObj.bottom) {
          if(scope.menuNav != 'resume') {
            scope.menuNav = 'resume';
            scope.changeStyle('resume');
          }
        }
        if(htmlHalfHeight >= scope.mainSkillObj.standard && htmlHalfHeight <= scope.mainSkillObj.bottom) {
          if(scope.menuNav != 'skills') {
            scope.menuNav = 'skills';
            scope.changeStyle('skills');
          }
        }
        if(htmlHalfHeight >= scope.mainPortfolioObj.standard && htmlHalfHeight <= scope.mainPortfolioObj.bottom) {
          if(scope.menuNav != 'portfolio') {
            scope.menuNav = 'portfolio';
            scope.changeStyle('portfolio');
          }
        }
        if(htmlHalfHeight >= scope.mainContactsObj.standard && htmlHalfHeight <= scope.mainContactsObj.bottom) {
          if(scope.menuNav != 'contacts') {
            scope.menuNav = 'contacts';
            scope.changeStyle('contacts');
          }
        }

        scope.$apply();

      }

      scope.clickMenu = function(menu) {
        $ionicScrollDelegate.scrollTo(0, menu.top, true);
      }
    }
  }
}

app.directive('menuDirective', menuDirective);
