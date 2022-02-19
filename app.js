var mainListDiv = document.getElementById("mainListDiv"),
    mediaButton = document.getElementById("mediaButton");

mediaButton.onclick = function () {
    
    "use strict";
    
    mainListDiv.classList.toggle("show_list");
    mediaButton.classList.toggle("active");
    
};

   // canvas 
        var gradient = new Gradient();
        gradient.initGradient("#gradient-canvas");

        // mobile menu
        document.querySelector('#mobile-menu').addEventListener('click', function () {
            document.querySelector('body').classList.toggle('menu-open');
        })

        var menuitem = document.querySelectorAll('.menu-list a'),
            i;
        for (i = 0; i < menuitem.length; ++i) {
            menuitem[i].addEventListener('click', function () {
                if (document.querySelector('body.menu-open')) {
                    document.querySelector('body').classList.toggle('menu-open')
                }
            })
        }

        // Smooth scroll
        var scroll = new SmoothScroll('a[href*="#"]', {
            speed: 600,
            updateURL: false,
            header: 'nav',
            offset: 24,
        });