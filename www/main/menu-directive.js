menuDirective = function($window) {
  return{
    template : `
      <div class="main-menu">
        <table>
          <tr>
            <td>HOME</td><td>ABOUT</td><td>RESUME</td><td>SKILLS</td><td>PORTFOLIO</td><td>CONTACTS</td>
          </tr>
        </table>
      </div>
    `,
    link : function(scope, element, attrs) {
      $(element).on("scroll", function() {
        console.log("1111");
        console.log("1111");
        console.log(element.prop('offsetTop') == 0);
        if(element.prop('offsetTop') == 0) {
          element.css('top', 0);
          element.css('position', 'absolute');
        }else if(element.prop('offsetTop') > 0) {
          element.css('top', 0);
          element.css('position', 'relative');
        }
      })

    }
  }
}

app.directive('menuDirective', menuDirective);
