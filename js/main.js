function sliderBrands() {
    var swiper = new Swiper('.brands .swiper', {
        slidesPerView: 1,
        loop: true,
        pagination: {
            el: ".brands .swiper-pagination",
            clickable: true,
        },
    })
}

function sliderImages() {
    var swiper = new Swiper('.images .swiper', {
        spaceBetween: 20,
        slidesPerView: 4,
        navigation: {
            nextEl: '.images .swiper-button-next',
            prevEl: '.images .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: "auto",
            },
            992: {
                slidesPerView: 3,
            },
            1450: {
                slidesPerView: 4,
            },

        }
    })
}

function sliderProduct() {
    var swiper = new Swiper('.product .swiper', {
        spaceBetween: 10,
        slidesPerView: 2,
        loop: true,
        navigation: {
            nextEl: '.product .swiper-button-next',
            prevEl: '.product .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
            },
            576: {
                slidesPerView: 2,
            },

            1450: {
                slidesPerView: 2,
            },

        }
    })

}

function sliderCard() {
    var swiper = new Swiper('.sale__content-slider .sale__swiper', {
        spaceBetween: 20,
        slidesPerView: 4,

        navigation: {
            nextEl: '.sale__content-slider .swiper-button-next',
            prevEl: '.sale__content-slider .swiper-button-prev',
        },
        pagination: {
            el: ".sale__content-slider .swiper-pagination",
            clickable: true,
        },
        breakpoints: {

            320: {
                slidesPerView: "auto",
                allowTouchMove: true,
            },
            992: {
                slidesPerView: 3,
                allowTouchMove: false,
            },

            1450: {
                slidesPerView: 4,
                allowTouchMove: false,
            },

        }
    })
}

function sliderCard2() {
    var swiper = new Swiper('.similar-products__content-slider .similar-products__swiper', {
        spaceBetween: 20,
        slidesPerView: 4,
        allowTouchMove: false,
        navigation: {
            nextEl: '.similar-products__content-slider .swiper-button-next',
            prevEl: '.similar-products__content-slider .swiper-button-prev',
        },
        pagination: {
            el: ".similar-products__content-slider .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },

            1450: {
                slidesPerView: 4,
            },

        }
    })
}


let cardProductsArray = []

function cardProducts() {
    $(".sale__content-slider2").each(function(index, el) {
        $(el).attr("data-slider-id", index)
        cardProductsArray[index] = new Swiper(`.sale__content-slider2[data-slider-id = "${index}"] .swiper`, {
            slidesPerView: 1,
            centeredSlides: 'true',
            allowTouchMove: false,
            loop: true,
            pagination: {
                el: `.sale__content-slider2[data-slider-id = "${index}"] .swiper-pagination`,
                clickable: true,
            },
        })
    })
};

let cardProducts2Array = []

function cardProducts2() {
    $(".similar-products__content-slider2").each(function(index, el) {
        $(el).attr("data-slider-id", index)
        cardProducts2Array[index] = new Swiper(`.similar-products__content-slider2[data-slider-id = "${index}"] .swiper`, {
            slidesPerView: 1,
            centeredSlides: 'true',
            loop: true,
            pagination: {
                el: `.similar-products__content-slider2[data-slider-id = "${index}"] .swiper-pagination`,
                clickable: true,
            },
        })
    })
};

let cardClothesArray = []

function cardClothes() {
    $(".clothes-bottom__slider").each(function(index, el) {
        $(el).attr("data-slider-id", index)
        cardClothesArray[index] = new Swiper(`.clothes-bottom__slider[data-slider-id = "${index}"] .swiper`, {
            slidesPerView: 1,
            centeredSlides: 'true',
            loop: true,
            pagination: {
                el: `.clothes-bottom__slider[data-slider-id = "${index}"] .swiper-pagination`,
                clickable: true,
            },
        })
    })
};

let cardRecentArray = []

function cardRecent() {
    $(".recent__slider").each(function(index, el) {
        $(el).attr("data-slider-id", index)
        cardRecentArray[index] = new Swiper(`.recent__slider[data-slider-id = "${index}"] .swiper`, {
            slidesPerView: 1,
            centeredSlides: 'true',
            loop: true,
            pagination: {
                el: `.recent__slider[data-slider-id = "${index}"] .swiper-pagination`,
                clickable: true,
            },
        })
    })
};

let cardAccountArray = []

function cardAccount() {
    $(".account__slider").each(function(index, el) {
        $(el).attr("data-slider-id", index)
        cardAccountArray[index] = new Swiper(`.account__slider[data-slider-id = "${index}"] .swiper`, {
            slidesPerView: 1,
            centeredSlides: 'true',
            loop: true,
            pagination: {
                el: `.account__slider[data-slider-id = "${index}"] .swiper-pagination`,
                clickable: true,
            },
        })
    })
};

let cardFavouritesArray = []

function cardFavourites() {
    $(".favourites__slider").each(function(index, el) {
        $(el).attr("data-slider-id", index)
        cardFavouritesArray[index] = new Swiper(`.favourites__slider[data-slider-id = "${index}"] .swiper`, {
            slidesPerView: 1,
            centeredSlides: 'true',
            loop: true,
            pagination: {
                el: `.favourites__slider[data-slider-id = "${index}"] .swiper-pagination`,
                clickable: true,
            },
        })
    })
};




$(document).ready(function() {

    sliderBrands();
    sliderImages();
    sliderProduct();
    sliderCard();
    sliderCard2();
    cardProducts();
    cardProducts2();
    cardClothes();
    cardRecent();
    cardAccount();
    cardFavourites();

    // Menu
    $(".burger").click(function() {
        $(this).toggleClass("burger--active")
        $(".header-mob").toggleClass("header-mob--active")
        $("body").toggleClass("fixed-body")
    })

    // Tab
    $(function() {
        $(".picker__content").not(":first").hide()
        $(".picker__tab").on("click", function() {
            $(".picker__tab").removeClass("active").eq($(this).index()).addClass("active")
            $(".picker__content").hide().eq($(this).index()).fadeIn()
        }).eq(0).addClass("active")
    })

    $(function() {
        $(".sale__content").not(":first").hide()
        $(".sale__tab").on("click", function() {
            $(".sale__tab").removeClass("active").eq($(this).index()).addClass("active")
            $(".sale__content").hide().eq($(this).index()).fadeIn()
        }).eq(0).addClass("active")
    })

    // Like
    $(".card__absolute-right").click(function() {
        $(this).toggleClass("card__absolute-right--active")
    })

    // Accordion
    $('.aside__item-show').click(function() {
        $(this).toggleClass('aside__item-show--active');
        $(this).siblings('.aside__item-hidden').toggleClass('aside__item-hidden--active');
    })
    $('.product__share-show').click(function() {
        $(this).toggleClass('product__share-show--active');
        $(this).siblings('.product__share-hidden').addClass('product__share-hidden--active');
    })

    $(document).mouseup(function(e) {
        var div = $(".product__share-hidden--active");
        if (!div.is(e.target) &&
            div.has(e.target).length === 0) {
            div.removeClass('product__share-hidden--active');
        }
    });

    //copy
    $(".copy-text").click(function() {
        var $tmp = $("<textarea>");
        $("body").append($tmp);
        $tmp.val($(this).html()).select();
        document.execCommand("copy");
        $tmp.remove();
    })

    // hover slider
    $(".hover__pag-item").mouseover(function() {
        let path = $(this).attr("data-tab-path")
        $(this).parents(".hover__slide").find(".hover__pag-item").removeClass("hover__pag-item--active")
        $(this).addClass("hover__pag-item--active")
        $(this).parents(".hover__slide").find(".hover__img").removeClass("hover__img--active")
        $(this).parents(`.hover__slide`).find(`.hover__img[data-tab-path="${path}"]`).addClass("hover__img--active")
    })

    function cartCalc() {
        $('.cartcalc .ccalc-minus').click(function() {
            let a = $(this).closest('.cartcalc').find('input').val();
            if (a > 1) {
                let b = +a - 1;
                $(this).closest('.cartcalc').find('input').val(b);
            } else {
                $(this).closest('.cartcalc').find('input').val(a);
            }
        });
        $('.cartcalc .ccalc-plus').click(function() {
            let a = $(this).closest('.cartcalc').find('input').val();
            let b = +a + 1;
            $(this).closest('.cartcalc').find('input').val(b);
        });
    }
    cartCalc()


    //form
    let form = document.querySelector('.form'),
        formInputs = document.querySelectorAll('.input'),
        inputName = document.querySelector('.input-name'),
        inputTelephone = document.querySelector('.input-telephone'),
        inputCheckbox = document.querySelector('.input-check');


    form.onsubmit = function() {

        let emailVal = inputName.value,
            phoneVal = inputTelephone.value,
            emtyInputs = Array.from(formInputs).filter(input => input.value === '');

        formInputs.forEach(function(input) {
            if (input.value === '') {
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        })

        if (emtyInputs.length !== 0) {

            return false;
        }
        if (!inputCheckbox.checked) {
            console.log('checkbox not checked');
            inputCheckbox.classList.add('error');
            return false;
        } else {
            inputCheckbox.classList.remove('error')
        }

    }

    // btn
    $('.add-to-order').click(function() {
        $(this).text('Добавлен в корзине');
    });

    //search
    $(".search-btn").click(function() {
            $(this).toggleClass("search-btn--active")
            $(".search-input").toggleClass("search-input--active")
        })
        //timer
    var Update = function() {
        $('.sec').each(function() {
            var count = parseInt($(this).html());
            if (count !== 0) {
                $(this).html(count - 1);
                if ($('.sec').html().length == 1) {
                    $('.sec').addClass("add-zero")
                } else {
                    $('.sec').removeClass("add-zero")
                }
            } else {
                dec_min();
            }
        })
    }
    setInterval(Update, 1000);

    function dec_min() {
        min = parseInt($('.min').html());
        if (min !== 0) {
            $('.min').html(min - 1);
            $('.sec').html(59);
            $('.sec').removeClass("add-zero")
            if ($('.min').html().length == 1) {
                $('.min').addClass("add-zero")
            } else {
                $('.min').removeClass("add-zero")
            }
        } else {
            dec_hr();
        }
    }

    function dec_hr() {
        hr = parseInt($('.hr').html());
        if (hr !== 0) {
            $('.hr').html(hr - 1);
            $('.min').html(59);
            $('.sec').html(59);
            $('.sec').removeClass("add-zero")
            $('.min').removeClass("add-zero")
            if ($('.hr').html().length == 1) {
                $('.hr').addClass("add-zero")
            } else {
                $('.hr').removeClass("add-zero")
            }
        } else {
            pass;
        }
    }
})