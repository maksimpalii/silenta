"use strict";

var navmainmenu = (function () {
    var menu = document.querySelector('.menu-home'),
        gamb = document.querySelector('.menu-hamburger'),
        mdop = document.querySelector('.menu-hamburger_mob'),
        navlang = document.querySelector('.menu-lang');
    return {
        set: function () {
            if (gamb !== null) {
                gamb.addEventListener('click', function () {
                    this.classList.toggle('menu-hamburger_active');
                    mdop.classList.toggle('active');
                    if (navlang !== null) {
                        navlang.classList.toggle('active');
                    }
                    menu.classList.toggle('menu-home_active');
                });

            }
        }
    }
}());


navmainmenu.set();


$(document).ready(function() {
    $('#fullpage').fullpage({
        'verticalCentered': false,
        'css3': true,
        // 'sectionsColor': ['#F0F2F4', '#fff', '#fff', '#fff'],
        'navigation': true,
        'navigationPosition': 'right',
        'navigationTooltips': ['fullPage.js', 'Powerful', 'Amazing', 'Simple'],

        'afterLoad': function(anchorLink, index){
            if(index == 2){
                $('#iphone3, #iphone2, #iphone4').addClass('active');
            }
        },

        'onLeave': function(index, nextIndex, direction){
            if (index == 3 && direction == 'down'){
                // $('.section').eq(index -1).removeClass('moveDown').addClass('moveUp');
            }
            else if(index == 3 && direction == 'up'){
                // $('.section').eq(index -1).removeClass('moveUp').addClass('moveDown');
            }

            // $('#staticImg').toggleClass('active', (index == 2 && direction == 'down' ) || (index == 4 && direction == 'up'));
            // $('#staticImg').toggleClass('moveDown', nextIndex == 4);
            // $('#staticImg').toggleClass('moveUp', index == 4 && direction == 'up');
        }
    });
});