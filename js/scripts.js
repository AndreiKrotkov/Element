$( document ).ready(function() {
    //Menu
    $('.js_menu').on('click', function(e){
        var body = $('body'),
            menu_active = body.hasClass('menu-open');

        if(!menu_active) {
            body.addClass('menu-open');
        } else {
            body.removeClass('menu-open');
        }
    });

    let windowWidth = document.documentElement.clientWidth;
    // Закрытие меню при клике не на элементе
    $(document).on('click', function(e) {
        if(windowWidth < 1200) {
            if (!$(e.target).closest(".js-navig").length && !$(e.target).closest(".js_menu").length) {
                $('.menu-open').removeClass('menu-open');
                $('.js-menu-categories-desc').hide(300);
            }
        }
        e.stopPropagation();
    });

    let $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 71
        }, 400);
        return false;
    });

    $('.menu__link').on('click', function () {
        let body = $('body'),
            menu_active = body.hasClass('menu-open');
        if(menu_active) {
            body.removeClass('menu-open');
        }
    })
    $('.btn').on('click', function () {
        var body = $('body'),
            menu_active = body.hasClass('menu-open');
        if(menu_active) {
            body.removeClass('menu-open');
        }
    })

    // Валидация формы Регистрации
    let $formReg = $('#formReg');
    let $formInputName = $formReg.find('input[name=firstName]');
    let $formInputEmail = $formReg.find('input[name=email]');

    $formReg.submit(function(e) {
        e.preventDefault();
        let $form = $(this);
        let checkFormValid;

        $formInputName.val().length < 2 ? $formInputName.closest('.wrp__input-form').addClass('error-inp') : $formInputName.closest('.wrp__input-form').removeClass('error-inp');
        $formInputEmail.val().length < 3 ? $formInputEmail.closest('.wrp__input-form').addClass('error-inp') : $formInputEmail.closest('.wrp__input-form').removeClass('error-inp');

        checkFormValid = $formReg.find('.wrp__input-form').hasClass('error-inp');

        console.log(!checkFormValid);
        if(!checkFormValid) {
            $form.serialize()
        } else {
            checkFormValid = false;
        }
    });

    $(".js-change-email").on('input', function (e) {
        $(this).closest('.wrp__input-form').removeClass('error-inp');
    });
    $(".js-change-name").on('input', function (e) {
        $(this).closest('.wrp__input-form').removeClass('error-inp');
    });

    $( ".js-show-start" ).animate({
        opacity: 1,
    }, 1500, "linear", function(){
    });

    $(function(){
        $(window).scroll(function(){
            if($(window).scrollTop() > 100) {
                $('#scroll_top').show(300);
            } else {
                $('#scroll_top').hide(300);
            }
        });

        $('#scroll_top').click(function(){
            $('html, body').animate({scrollTop: 0}, 600);
            return false;
        });
    });
});


