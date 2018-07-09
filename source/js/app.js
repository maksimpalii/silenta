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


function createFullpage() {
    $('#fullpage').fullpage({
        'verticalCentered': false,
        'css3': true,
        // 'sectionsColor': ['#F0F2F4', '#fff', '#fff', '#fff'],
        'navigation': true,
        'navigationPosition': 'right',
        // 'navigationTooltips': ['fullPage.js', 'Powerful', 'Amazing', 'Simple'],

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
}

$(document).ready(function() {
    createFullpage();
});
// window.onload= function () {
//     // blur.set();
//
// };

var swiper = new Swiper('.swiper-container', {
    init:false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

var swiper2 = new Swiper('.swiper-container2', {
    init:false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
var swiper3 = new Swiper('.swiper-container3', {
    init:false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

var checkSize = function () {
    console.log(window.innerWidth);
    if (window.innerWidth < 480){
        swiper.init();
        swiper2.init();
        swiper3.init();
        $.fn.fullpage.destroy('all');
    }
    else{
        swiper.destroy();
        swiper2.destroy();
        swiper3.destroy();
        createFullpage();
    }

};

window.addEventListener('resize', checkSize);
window.addEventListener('load', checkSize);