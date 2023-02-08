


$(()=>{
    const menu = $('.menu');
    const menuItem = $('.menuItem');
    const hamburger = $('.hamburger');
    const closeIcon = $('.closeIcon');
    const menuIcon = $('.menuIcon')

    const toggleMenu = () => {
        if(menu.hasClass("showMenu")){
            menu.removeClass("showMenu");
            closeIcon.css('display', 'none')
            menuIcon.css('display', 'block')

        }
        else{
            menu.addClass("showMenu");
            closeIcon.css('display', 'block')
            menuIcon.css('display', 'none')
        }
    }

    hamburger.on('click', toggleMenu);
    //closes window when clicked
    for(let i = 0; i < menuItem.length; i++){
        menuItem.on('click', toggleMenu);
    }

})