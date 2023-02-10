


$(()=>{
    //hamburger menu jQuery
    const toggleMenu = () => {
        if($('.menu').hasClass("showMenu")){
            $('.menu').removeClass("showMenu");
            $('.closeIcon').css('display', 'none');
            $('.menuIcon').css('display', 'block');
        }
        else{
            $('.menu').addClass("showMenu");
            $('.closeIcon').css('display', 'block');
            $('.menuIcon').css('display', 'none');
        }
    }

    $('.hamburger').on('click', toggleMenu);
    //closes window when clicked
    for(let i = 0; i < $('.menuItem').length; i++){
        $('.menuItem').on('click', toggleMenu);
    }


    // smooth scroll jQuery
    $('a[href*="#"]:not([href="#"])').click(function() {
        var target = $(this.hash);
        console.log(target.slice(1));
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            $('html,body').animate({
            scrollTop: target.offset().top
        }, 100);
        return false;
        }
    });

    });


//carousel vanilla js
const slides = document.querySelectorAll(".slide");
slides.forEach((slide, indx) => {
    console.log("test");
    slide.style.transform = `translateX(${indx * 100}%)`;
});

let currentSlide = 0;
let maxSlide = slides.length - 1;
const nextSlide = document.querySelector(".btn-next");


nextSlide.addEventListener("click", function () {
    if(currentSlide === maxSlide){
        currentSlide = 0;
    }else{
        currentSlide++;
    }

slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - currentSlide)}%)`;
    });
});


const prevSlide = document.querySelector(".btn-prev");

prevSlide.addEventListener("click", function () {
    if (currentSlide === 0) {
        urrentSlide = maxSlide;
    } else {
        currentSlide--
    }

    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - currentSlide)}%)`;
    });
});

