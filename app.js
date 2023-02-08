


$(()=>{
    const menu = $('.menu');
    const menuItem = $('.menuItem');
    const hamburger = $('.hamburger');
    const close = $('.close');
    const menuIcon = $('.menuIcon')

    const toggleMenu = () => {
        if($("menu:contianes("showMenu")")){
            menu.removeClass(".showMenu");
            close.css({'display': 'none'})
            menuIcon.css({'display': 'block'})
        }else{
            menu.addClass("showMenu");
            close.css({'display': 'block'})
            menuIcon.css({'display': 'block'})
        }
    }

    hamburger.on('click', toggleMenu);

})