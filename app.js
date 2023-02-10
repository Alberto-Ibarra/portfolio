


$(()=>{
    //hamburger menu
    const toggleMenu = () => {
        if($('.menu').hasClass("showMenu")){
            $('.menu').removeClass("showMenu");
            $('.closeIcon').css('display', 'none')
            $('.menuIcon').css('display', 'block')

        }
        else{
            $('.menu').addClass("showMenu");
            $('.closeIcon').css('display', 'block')
            $('.menuIcon').css('display', 'none')
        }
    }

    $('.hamburger').on('click', toggleMenu);
    //closes window when clicked
    for(let i = 0; i < $('.menuItem').length; i++){
        $('.menuItem').on('click', toggleMenu);
    }


    // smooth scroll
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                scrollTop: target.offset().top
            }, 800);
            return false;
            }
        }
    });


    })